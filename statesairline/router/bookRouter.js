const {userlookup, usercreate, userdelete} = require('../controller/bookcontroller');
const exress = require('express');
const router = exress.Router();

// 예약 내역 조회
router.get('/', userlookup)

// 항공편에 대한 예약 내역 생성
router.post("/", usercreate);

// 예약 내역 삭제
router.delete("/:id", userdelete);

module.exports = router;