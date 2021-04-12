const { findAll, findById, update } = require('../controller/flightcontroller');
const exress = require('express');
const router = exress.Router();

// 전체 항공편 조회
router.get('/', findAll);

// 특정 항공편 내용 조회
router.get('/:id', findById);

// 항공편 수정
router.put('/:id', update);

module.exports = router;
