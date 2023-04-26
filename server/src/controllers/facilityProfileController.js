const FacilityProfile = require('../models/healthcareFacilityProfile')

exports.getFacilityById = async (req, res) => {
    try {
        const facilityInfo = req.params.id;
        const facility = await FacilityProfile.findOne({ healthcare_facility_id: facilityInfo });
        res.json(facility);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching organization from database.' });
    }
};

exports.updateFacility = async (req, res) => {
    try {
        const facility = await FacilityProfile.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(facility);
    } catch (error) {
        res.status(500).json({ error: 'Error updating organization in database.' });
    }
};

exports.getProById = async (req, res) => {
    try {
        const facilityInfo = req.params.id;
        const facility = await FacilityProfile.findOne({ healthcare_facility_id: facilityInfo });
        res.json(facility);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching organization from database.' });
    }
};