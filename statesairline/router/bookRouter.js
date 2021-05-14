const { findById, create, deleteById } = require('../controller/bookController');
const exress = require('express');
const router = exress.Router();

router.get('/', findById);

router.post('/', create);

router.delete('/', deleteById);

module.exports = router;
