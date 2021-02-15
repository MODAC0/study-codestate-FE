const db = require("../db");

module.exports = {
  // controller에서 db에 요청을 보내는 models
  // 데이터베이스에서 데이터를 가지고 와서 다른 객체에 전달하는 역할
  // query string이 여기에 와야함

  // userId로 주문 조회하기
  orders: {
    get: (userId, callback) => {
      // userId로 전체 주문 내역 조회
      const queryString = `SELECT * FROM orders where (user_id = ${userId})`;

      // db query
      db.query(queryString, (error, result) => {
        callback(error, result);
      });
    },
    getDetail: (orderId, callback) => {
      // orderId에 따라서 상세 내용 조회하기
      const queryString = `SELECT * FROM items 
      RIGHT JOIN order_items ON (order_items.item_id = items.id)
      INNER JOIN orders ON (orders.id = order_items.order_id)
      WHERE (orders.id = ${orderId})`;

      // db query
      db.query(queryString, (error, result) => {
        callback(error, result);
      });
    },
    post: (userId, datas, totalPrice, callback) => {
      // orderData -> order_items 테이블에 기록

      // 1. orders에 레코드 생성 (userId, totalPrice)
      // 2. order_items에 추가 (datas)
      const queryString = `INSERT INTO orders (user_id, total_price) VALUES (?, ?)`;
      const params = [userId, totalPrice];

      // db query
      db.query(queryString, params, (error, results) => {
        // const params = datas;
        // const id = results.insertId;
        // w3school -> bulk insert를 예시로 컨텐츠에서 제공
        const params = datas.map(data => {
          return [results.insertId, ...data];
        });

        const queryString = `INSERT INTO order_items (order_id, item_id, order_quantity) VALUES ?;`;

        db.query(queryString, [params], (error, results) => {
          callback(error, results);
        });
      });
    },
  },
  items: {
    get: callback => {
      // items 테이블을 다 조회해서 가져다 주기
      const queryString = `SELECT * FROM items`;

      // query
      db.query(queryString, (error, result) => {
        callback(error, result);
      });
    },
  },
};
