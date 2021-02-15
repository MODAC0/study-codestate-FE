const router = require("express").Router();
const controller = require("./controllers");

// userid -> user의 모든 주문 내역만 조회 -> 예시로 제공?
router.get("/user/:id", controller.orders.get);
// orderid -> 해당 order의 상세 내역 조회 -> todo
router.get("/:orderId", controller.orders.getDetail);
// [items] -> 주문하기 버튼 누르면 데이터 저장 -> todo
router.post("/new", controller.orders.post);

module.exports = router;
