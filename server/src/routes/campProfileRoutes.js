const express = require('express');
const campProfileController = require('../controllers/campProfileController');

const router = express.Router();

router.get('/camps/:id', campProfileController.getCampById);
router.put('/camps/:id', campProfileController.updateCamp);

module.exports = router;