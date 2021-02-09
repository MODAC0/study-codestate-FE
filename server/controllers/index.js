var models = require("../models");

module.exports = {
    get: function(req, res) {
      const id = parseInt(req.params.id, 10);
      if (!id){
        return res.status(400).json({err: `Incorrect id`});
      }
      else {
        models.get(id, function(err, results) {
          if (err) {
            res.send(err);
          }
          res.json(results);
        });  
      }
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
