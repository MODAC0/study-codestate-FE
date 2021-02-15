const express = require("express");
const router = require("./Routes");
const cors = require("cors");
const morgan = require("morgan");
const parser = require("body-parser");
const controller = require("./controllers");

const app = express();
const port = 4000;

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms"),
);
app.use(cors());
app.use(parser.json());
app.use("/orders", router);
app.get("/main", controller.items.get);

app.listen(port, () => {
  console.log(`🚀 Server is starting on ${port}`);
});

// userid -> get -> 주문내역 조회 (userid가 1인지 아닌지 그냥 검사해서 돌려주는 형식으로)
// orderid -> get -> 주문 상세내역 조회
// [orders] -> post -> 주문 요청 -> 주문 + 주문 상세 테이블 반영
// mainpage -> get -> 제품 정보 조회
