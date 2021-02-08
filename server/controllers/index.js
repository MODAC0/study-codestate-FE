var models = require("../models");

module.exports = {
    get: function(req, res) {
      models.orders.get(function(err, results) {
        if (err) {
          /* do something */
        }
        res.json(results);
      });
    },
    post: function(req, res) {
        //var params = [req.body.text, req.body.username, req.body.roomname];
        //models.cart.post(params, function(err) {
        //  if (err) {
        //    /* do something */
        //    res.send(err);
        //  }
        //  res.sendStatus(201);
        //});
    }
};
