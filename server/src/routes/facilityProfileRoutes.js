const express = require('express');
const facilityProfileController = require('../controllers/facilityProfileController');

const router = express.Router();

router.get('/facilities/:id', facilityProfileController.getFacilityById);
router.put('/facilities/:id', facilityProfileController.updateFacility);
router.get('/pros/:id', facilityProfileController.getProById);
// router.post('/registernewpros/:id', orgProfileController.addnewCamp);

module.exports = router;