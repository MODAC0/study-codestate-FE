const { USER_DATA } = require("../../db/data");

module.exports = (req, res) => {
  const sessionId = req.session.sessionId;
  const userInfo = {
    ...USER_DATA.filter((user) => user.id === sessionId)[0],
  };

  if (!sessionId || !userInfo.id) {
    res.status(401).send("Not Authorized");
  } else {
    delete userInfo.password;
    res.send(userInfo);
  }
};
