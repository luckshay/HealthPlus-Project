const express = require('express');
const orgProfileController = require('../controllers/orgProfileController');

const router = express.Router();

router.get('/orgs/:id', orgProfileController.getOrgById);
router.put('/orgs/:id', orgProfileController.updateOrg);
router.get('/camps/:id', orgProfileController.getCampById);
router.post('/registernewcamp/:id', orgProfileController.addnewCamp);

module.exports = router;