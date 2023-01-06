const { USER_DATA } = require("../../db/data");

module.exports = (req, res) => {
  const { userId, password } = req.body.loginInfo;
  const { checkedKeepLogin } = req.body;
  const userInfo = {
    ...USER_DATA.filter(
      (user) => user.userId === userId && user.password === password
    )[0],
  };
  const cookiesOption = {
    domain: "localhost",
    path: "/",
    httpOnly: true,
    sameSite: "none",
    secure: true,
  };

  if (!userInfo.id) {
    res.status(401).send("Not Authorized");
  } else if (checkedKeepLogin) {
    cookiesOption.maxAge = 1000 * 60 * 30;
    cookiesOption.expires = new Date(Date.now() + 1000 * 60 * 30);
    res.cookie("cookieId", userInfo.id, cookiesOption);
    res.redirect("/userinfo");
  } else {
    res.cookie("cookieId", userInfo.id, cookiesOption);
    res.redirect("/userinfo");
  }
};
