const express = require('express');
const {analysis} = require('../controllers/compStatsController');

const router = express.Router();

router.get('/analysis', analysis);

module.exports = router;
