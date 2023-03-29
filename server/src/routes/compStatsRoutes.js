const express = require('express');
const {analysis} = require('../controllers/compStatsController');

const router = express.Router();

router.get('/', analysis);

module.exports = router;
