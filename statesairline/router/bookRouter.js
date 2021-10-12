const { findById, create, deleteById } = require('../controller/bookController');
const express = require('express');
const router = express.Router();

router.get('/', findById);

router.post('/', create);

router.delete('/', deleteById);

module.exports = router;
