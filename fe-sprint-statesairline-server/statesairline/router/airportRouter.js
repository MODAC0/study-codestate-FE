const { findAll } = require('../controller/airportController');
const express = require('express');
const router = express.Router();

router.get('/', findAll);

module.exports = router;
