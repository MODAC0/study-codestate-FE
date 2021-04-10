const jwt = require('jsonwebtoken');

module.exports = {

  authToken: function (req, res, next) {
    const header = req.headers.authorization;

    const accessToken = header.split(' ')[1];

    if (accessToken === 'null') {
      res.status(401).send('Not Authorized');
    } else {
      jwt.verify(accessToken, 'secretKey', (err, username) => {
        if (err) {
          res.status(403).send('Forbidden');
        } else {
          req.username = username;
          next();
        }
      });
    }
  }

};
