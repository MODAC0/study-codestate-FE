const { lookup, create, delete_id } = require('../controller/bookcontroller');
const exress = require('express');
const router = exress.Router();

// 예약 내역 조회
router.get('/', lookup);

// 항공편에 대한 예약 내역 생성
router.post('/',create);

// 예약 내역 삭제
router.delete('/:id', delete_id);

module.exports = router;
