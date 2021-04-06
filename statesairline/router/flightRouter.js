const {flightlookup, flightlookupid, flightupdate} = require('../controller/flightcontroller');
const exress = require('express');
const router = exress.Router();

//전체 항공편 조회
router.get('/', flightlookup);

//특정 항공편 내용 조회
router.get('/:id', flightlookupid)

//항공편 수정
router.put('/:id', flightupdate)
module.exports = router;