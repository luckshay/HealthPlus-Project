const OrgProfile = require('../models/bloodDonationCampOrganizationProfile')

exports.getOrgById = async (req, res) => {
    try {
        const orgInfo = req.params.id;
        const org = await OrgProfile.findOne({ donation_org_id: orgInfo });
        res.json(org);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching organization from database.' });
    }
};

exports.updateOrg = async (req, res) => {
    try {
        const org = await OrgProfile.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(org);
    } catch (error) {
        res.status(500).json({ error: 'Error updating organization in database.' });
    }
};
exports.getCampById = async (req, res) => {
    try {
        const orgInfo = req.params.id;
        const org = await OrgProfile.findOne({ donation_org_id: orgInfo });
        res.json(org);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching organization from database.' });
    }
};

exports.addnewCamp = async (req, res) => {
    const { campName, isActive, address, date, start_time, end_time, units_collected } = req.body;
    
    try {
        const organization = await OrgProfile.findById(req.params.id);
        if (!organization) {
            return res.status(400).json({ error: 'Organization not found' });
        }
        
        organization.camps.unshift({
            camp_name: campName,
            isActive: isActive,
            address: address,
            date: date,
            start_time: start_time,
            end_time: end_time,
            units_collected: units_collected
        });
       
        await organization.save();

        res.json({ message: 'Camp created successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

exports.getlist=async (_req, res) => {
    try {
        const orgs = await OrgProfile.find();
    
        const allCamps = orgs.reduce((camps, org) => {
          if (org && Array.isArray(org.camps)) {
            const orgCamps = org.camps.map((camp) => ({
              orgName: org.orgName,
              campName: camp.camp_name,
              city: camp.address.city,
              state: camp.address.state,
            }));
    
            return camps.concat(orgCamps);
          }
    
          return camps;
        }, []);
    
        const sortedCamps = allCamps.sort((a, b) => {
          if (a.city === b.city) {
            return a.state.localeCompare(b.state);
          }
          return a.city.localeCompare(b.city);
        });
        res.json(sortedCamps);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
    };