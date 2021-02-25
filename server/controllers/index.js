const models = require('../models');
const { orders_items, items, users, orders } = models;

module.exports = {
  orders: {
    get: async (req, res) => {
      const userId = req.params.userId;

      if (!userId) {
        return res.status(401).send('Unauthorized user.');
      } else {
        // models.orders.get(userId, (error, result) => {
        //   if (error) {
        //     res.status(404).send('No orders found.');
        //   } else {
        //     res.status(200).json(result);
        //   }
        // });
        try {
          const result = await users.findAll({
            where: { id: userId },
            include: [
              { model: orders, attributes: ['id', 'createdAt', 'total_price'] },
              { model: items, attributes: ['price', 'image'] },
              { model: orders_items, attributes: ['order_quantity'] }

            ]
          });
          console.log(result);
          res.status(200).json(result);
        } catch (e) {
          console.log(e);
          res.status(404).send('No orders found.');
        }
      }
    },
    post: async (req, res) => {
      const userId = req.params.userId;
      const { orders, totalPrice } = req.body;

      if (orders.length === 0) {
        return res.status(400).send('Bad request.');
      } else {
        try {
          const result = await orders.create({
            user_id: userId,
            total_price: totalPrice
          });
          orders.map(async order => {
            await orders_items.create({
              order_id: result.insertId,
              item_id: order.itemId,
              order_quantity: order.quantity
            });
          });
          res.status(201).send('Order has been placed');
        } catch (e) {
          res.status(404).send('Not found');
        }
      }
    }
  },
  items: {
    get: async (req, res) => {
      // models.items.get((error, result) => {
      //   if (error) {
      //     res.status(404).send('Not found');
      //   } else {
      //     res.status(200).json(result);
      //   }
      // });
      try {
        const data = await items.findAll();
        res.status(200).json(data);
      } catch (e) {
        console.log(e);
        res.status(500).send();
      }
    }
  }
};
