const express = require('express');
const userqueryController = require('../controllers/userqueryController');

const router = express.Router();

router.post('/', userqueryController.userquery);

module.exports = router;