const { findAll, findById, update } = require('../controller/flightController');
const express = require('express');
const router = express.Router();

router.get('/', findAll);

router.get('/:uuid', findById);

router.put('/:uuid', update);

module.exports = router;
