const models = require('../models');
const { orders_items, items, users, orderlists } = models;

module.exports = {
  orders: {
    get: async (req, res) => {
      const userId = req.params.userId;

      if (!userId) {
        return res.status(401).send('Unauthorized user.');
      } else {
        try {
          const result = await orderlists.findAll(
            {
              include: [
                {
                  model: items,
                  through: {
                    attribute: ['itemsId', 'orderId']
                  },
                  required: true
                }, {
                  model: users,
                  where: {
                    id: userId
                  }
                }
              ]
            });
          const array = result.map(index => index.dataValues);
          res.status(200).json(array);
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
          const result = await orderlists.create({
            id: 0,
            userId: userId,
            totalPrice: totalPrice
          });
          orders.map(async order => {
            await orders_items.create({
              orderId: result.id,
              itemsId: order.itemId,
              orderQuantity: order.quantity
            });
          });
          res.status(201).send('Order has been placed');
        } catch (e) {
          console.log(e);
          res.status(404).send('Not found');
        }
      }
    }
  },
  items: {
    get: async (req, res) => {
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
