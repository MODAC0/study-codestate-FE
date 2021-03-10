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
          const result = await orders_items.findAll(
            {
              include: [
                { model: items },
                {
                  model: orderlists,
                  where: { userId: userId }
                }

              ]

            });
          const rest = [];
          const array = result.map(index => index.dataValues);

          for (const n of array) {
            console.log(n);
            if (rest.length === 0) {
              const template = Object.assign(n.orderlist.dataValues);
              template.items = [];
              n.item.dataValues.orderQuantity = n.orderQuantity;
              template.items.push(n.item);
              rest.push(template);
            } else {
              let flag = true;
              for (const index in rest) {
                if (rest[index].id === n.orderlist.id) {
                  n.item.dataValues.orderQuantity = n.orderQuantity;
                  rest[index].items.push(n.item);

                  flag = false;
                }
              }
              if (flag) {
                const template = Object.assign(n.orderlist.dataValues);
                template.items = [];
                n.item.dataValues.orderQuantity = n.orderQuantity;
                template.items.push(n.item);
                rest.push(template);
              }
            }
          }
          res.status(200).json(rest);
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
              orderlistId: result.id,
              itemId: order.itemId,
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
