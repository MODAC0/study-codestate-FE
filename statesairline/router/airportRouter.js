const { findAll } = require('../controller/airportController');
const exress = require('express');
const router = exress.Router();

router.get('/', findAll);

module.exports = router;
