const models = require("../models");

module.exports = {
  orders: {
    get: (req, res) => {
      // params에 id로 구분해서 들어오는?
      // 기본적으로 주는 내용으로 하는 건 어떤지?
      const userId = req.params.userId;
      
      if (!userId) {
        return res.status(401).send("Unauthorized user.");
      } else {
        models.orders.get(userId, (error, result) => {
          if (error) {
            res.status(404).send("No orders found.");
          } else {
            res.status(200).json(result);
          }
        });
      }
    },
    post: (req, res) => {
      // req.body에 어떤 형식으로 담아올지 정해야할 듯
      const userId = req.body.userId;
      const datas = req.body.orders.map(order => {
        order = [order.itemId, order.quantity];
        return order;
      });
       console.log(req.body);
      const totalPrice = req.body.totalPrice;

      if (datas.length === 0) {
        return res.status(400).send("Bad request.");
      } else {
        models.orders.post(userId, datas, totalPrice, (error, result) => {
          if (error) {
            res.status(404).send("Not found");
          } else {
            res.status(201).send("Order has been placed.");
          }
        });
      }
    },
  },
  items: {
    get: (req, res) => {
      models.items.get((error, result) => {
        if (error) {
          res.status(404).send("Not found");
        } else {
          res.status(200).json(result);
        }
      });
    },
  },
};
