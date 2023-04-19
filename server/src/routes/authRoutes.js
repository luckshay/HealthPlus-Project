const express = require('express');
const authController = require('../controllers/authController');
// const authToken= require('../library/authToken')

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/getUserData', authController.getUserData);

module.exports = router;