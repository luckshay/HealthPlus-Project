const express = require('express');
const orgProfileController = require('../controllers/orgProfileController');

const router = express.Router();

router.get('/orgs/:id', orgProfileController.getOrgById);
router.put('/orgs/:id', orgProfileController.updateOrg);

module.exports = router;