const { USER_DATA } = require("../../db/data");

module.exports = (req, res) => {
  const cookieId = req.cookies.cookieId;
  const userInfo = {
    ...USER_DATA.filter((user) => user.id === cookieId)[0],
  };
  if (!cookieId || !userInfo.id) {
    res.status(401).send("Not Authorized");
  } else {
    delete userInfo.password;
    res.send(userInfo);
  }
};
