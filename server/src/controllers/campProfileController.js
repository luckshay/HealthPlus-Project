const CampProfile = require('../models/bloodDonationProfile')

exports.getCampById = async (req, res) => {
    try {
        const campInfo=req.params.id;
        const camp = await CampProfile.findOne({donation_org_id:campInfo});
        res.json(camp);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching recipient from database.' });
    }
};

exports.updateCamp = async (req, res) => {
    try {
        const camp = await CampProfile.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(camp);
    } catch (error) {
        res.status(500).json({ error: 'Error updating recipient in database.' });
    }
};