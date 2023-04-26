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

exports.addnewPro = async (req, res) => {
    const { name, speciality, contact_no, email ,joining_date, leaving_date } = req.body;

    try {
        const facility = await FacilityProfile.findById(req.params.id);
        if (!facility) {
            return res.status(400).json({ error: 'Organization not found' });
        }

        facility.professionals.unshift({
            name: name,
            speciality: speciality,
            contact_no: contact_no,
            email:email,
            joining_date:joining_date,
            leaving_date:leaving_date
        });

        await facility.save();

        res.json({ message: 'Camp created successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}