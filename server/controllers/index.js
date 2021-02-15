const models = require("../models");

module.exports = {
  orders: {
    get: (req, res) => {
      // params에 id로 구분해서 들어오는?
      // 기본적으로 주는 내용으로 하는 건 어떤지?
      const userId = req.params.id;

      if (!userId) {
        return res.status(409).send("user is not found");
      } else {
        models.orders.get(userId, (error, result) => {
          if (error) {
            res.status(409).send("user data is not found");
          } else {
            res.status(200).json(result);
          }
        });
      }
    },
    getDetail: (req, res) => {
      const orderId = req.params.id;

      if (!orderId) {
        return res.status(409).send("order is not found");
      } else {
        models.orders.getDetail(orderId, (error, result) => {
          if (error) {
            res.status(409).send("order is not found");
          } else {
            res.status(200).json(result);
          }
        });
      }
    },
    post: (req, res) => {
      // req.body에 어떤 형식으로 담아올지 정해야할 듯
      const datas = [...req.body.orders];

      if (datas.length === 0) {
        return res.status(409).send("not found");
      } else {
        models.orders.post(datas, (error, result) => {
          if (error) {
            res.status(409).send("not found");
          } else {
            res.status(201).send("order is success");
          }
        });
      }
    },
  },
  items: {
    get: (req, res) => {
      
      models.items.getItems((error, result) => {
        if (error) {
          res.status(409).send("not found");
        } else {
          res.status(200).json(result);
        }
      });
    },
  },
};
