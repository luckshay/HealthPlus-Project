const express = require('express');
const reciProfileController = require('../controllers/reciProfileController');

const router = express.Router();

router.get('/users/:id', reciProfileController.getRecipientById);
router.put('/users/:id', reciProfileController.updateRecipient);

module.exports = router;