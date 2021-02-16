const router = require("express").Router();
const controller = require("./controllers");

// userid -> user의 모든 주문 내역만 조회 -> 예시로 제공?
router.get("/:userId/orders", controller.orders.get);
// [items] -> 주문하기 버튼 누르면 데이터 저장 -> todo
router.post("/:userId/orders/new", controller.orders.post);

module.exports = router;
