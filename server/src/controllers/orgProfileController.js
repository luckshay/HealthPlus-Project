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