const express = require('express');
const facilityProfileController = require('../controllers/facilityProfileController');

const router = express.Router();

router.get('/facilities/:id', facilityProfileController.getFacilityById);
router.put('/facilities/:id', facilityProfileController.updateFacility);
router.get('/pros/:id', facilityProfileController.getProById);
router.post('/registernewpros/:id', facilityProfileController.addnewPro);
router.get('/getlist', facilityProfileController.getlist)

module.exports = router;