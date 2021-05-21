const { findAll, findById, update } = require('../controller/flightController');
const exress = require('express');
const router = exress.Router();

router.get('/', findAll);

router.get('/:id', findById);

router.put('/:id', update);

module.exports = router;
