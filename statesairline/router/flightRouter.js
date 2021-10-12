const { findAll, findById, update } = require('../controller/flightController');
const express = require('express');
const router = express.Router();

router.get('/', findAll);

router.get('/:id', findById);

router.put('/:id', update);

module.exports = router;
