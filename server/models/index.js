var db = require("../db");

module.exports = {
    get: function(callback) {
      // fetch all messages
      // text, username, roomname, id
      var queryStr = 
        `SELECT items.name, items.price, items.image, order_items.order_quantity, users.name
        FROM users ON (users.id = ${id})
        JOIN orders ON (order_items.user_id = ${id})
        JOIN order_items ON (orders.id = order_items.order_id)
        JOIN items ON (order_item.item_id = items.id)`
      db.query(queryStr, function(err, results) {
        callback(err, results);
      });
    },
    post: function(params, callback) {
      // create a message for a user id based on the given username
      var queryStr = `insert into messages(text, userid, roomname)
                      value (?, (select id from users where username = ? limit 1), ?)`;
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
};
SELECT orders.id, orders.created_at, items.name, items.price, items.image, order_items.order_quantity, users.name
FROM users 
INNER JOIN orders ON (orders.user_id = 1)
INNER JOIN order_items ON (orders.id = order_items.order_id)
INNER JOIN items ON (order_items.item_id = items.id)
WHERE (users.id = 1)

SELECT orders.id, orders.created_at, items, order_items.order_quantity, users.name
FROM items 
INNER JOIN order_items ON (order_items.item_id = items.id)
INNER JOIN orders ON (orders.id = order_items.order_id)
INNER JOIN users ON (orders.user_id = users.id)
WHERE (users.id = 1)