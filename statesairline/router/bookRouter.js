const { findAll, findByPhone, findByIdAndPhone, create, deleteByIdAndPhone } = require('../controller/bookController');
const express = require('express');
const router = express.Router();

router.get('/', findAll);

router.get('/:phone', findByPhone);

router.get('/:id/:phone', findByIdAndPhone);

router.post('/', create);

//Optional
router.delete('/:id/:phone', deleteByIdAndPhone);

module.exports = router;
