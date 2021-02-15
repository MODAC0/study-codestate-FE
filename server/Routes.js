const router = require("express").Router();
const controller = require("./controllers");

// userid -> user의 모든 주문 내역만 조회 -> 예시로 제공?
router.get("/user/:id", controller.orders.get);
// orderid -> 해당 order의 상세 내역 조회 -> todo
router.get("/orders/:id", controller.orders.getDetail);
// [items] -> 주문하기 버튼 누르면 데이터 저장 -> todo
router.post("/orders/new", controller.orders.post);
// mainpage -> 수량, 가격, 이미지 정보 불러오는 요청 -> todo
router.get("/main", controller.items.get);

module.exports = router;
