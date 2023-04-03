const express = require('express');
const {userquery} = require('../controllers/userqueryController');

const router = express.Router();

router.post('/', userquery);

module.exports = router;