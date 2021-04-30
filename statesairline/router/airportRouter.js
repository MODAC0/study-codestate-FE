const { findAll } = require('../controller/airportController');
const exress = require('express');
const router = exress.Router();

// 공항 목로 조회
router.get('/', findAll);

module.exports = router;
