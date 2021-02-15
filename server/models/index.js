const db = require("../db");

module.exports = {
  // controller에서 db에 요청을 보내는 models
  // 데이터베이스에서 데이터를 가지고 와서 다른 객체에 전달하는 역할
  // query string이 여기에 와야함

  // userId로 주문 조회하기
  orders: {
    get: (userId, callback) => {
      // userId로 전체 주문 내역 조회
      const queryString = ``;

      // db query
      db.query(queryString, (error, result) => {
        callback(error, result);
      });
    },
    getDetail: (orderId, callback) => {
      // orderId에 따라서 상세 내용 조회하기
      const queryString = `SELECT * FROM items INNER JOIN order_items ON (order_items.item_id = items.id)
      INNER JOIN orders ON (orders.id = order_items.order_id)
      INNER JOIN users ON (orders.user_id = users.id)
      WHERE (users.id = ${orderId})`;

      // db query
      db.query(queryString, (error, result) => {
        callback(error, result);
      });
    },
    post: (datas, callback) => {
      // orderData -> order_items 테이블에 기록
      const queryString = ``;

      // db query
      db.query(queryString, datas, (error, result) => {
        callback(error, result);
      });
    },
  },
  items: {
    getItems: callback => {
      // items 테이블을 다 조회해서 가져다 주기
      const queryString = `SELECT * FROM items`;

      // query
      db.query(queryString, (error, result) => {
        callback(error, result);
      });
    },
  },
};
