const OrgProfile = require('../models/bloodDonationCampOrganizationProfile')

exports.getOrgById = async (req, res) => {
    try {
        const orgInfo=req.params.id;
        const org = await OrgProfile.findOne({donation_org_id:orgInfo});
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