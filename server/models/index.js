const db = require("../db");

module.exports = {
  orders: {
    get: (userId, callback) => {
      const queryString = `SELECT orders.id, orders.created_at, orders.total_price, items.name, items.price, items.image, order_items.order_quantity FROM items 
      INNER JOIN order_items ON (order_items.item_id = items.id)
      INNER JOIN orders ON (orders.id = order_items.order_id)
      INNER JOIN users ON (orders.user_id = users.id)
      WHERE (users.id = ?)`;

      const params = [userId];

      db.query(queryString, params, (error, result) => {
        callback(error, result);
      });
    },
    post: (userId, orders, totalPrice, callback) => {
      const queryString = `INSERT INTO orders (user_id, total_price) VALUES (?, ?)`;
      const params = [userId, totalPrice];

      db.query(queryString, params, (error, result) => {
        if (result) {
          const queryString = `INSERT INTO order_items (order_id, item_id, order_quantity) VALUES ?;`;
          const params = orders.map(order => [
            result.insertId,
            order.itemId,
            order.quantity,
          ]);

          return db.query(queryString, [params], (error, result) => {
            callback(error, result);
          });
        }
        callback(error, null);
      });
    },
  },
  items: {
    get: callback => {
      const queryString = `SELECT * FROM items`;

      db.query(queryString, (error, result) => {
        callback(error, result);
      });
    },
  },
};
