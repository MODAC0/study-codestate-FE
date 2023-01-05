const { USER_DATA } = require("../../db/data");
module.exports = (req, res) => {
  const { userId, password } = req.body.loginInfo;
  const { checkedKeepLogin } = req.body;
  const userInfo = {
    ...USER_DATA.filter(
      (user) => user.userId === userId && user.password === password
    )[0],
  };
  if (!userInfo.id) {
    res.status(401).send("Not Authorized");
  } else if (checkedKeepLogin) {
    req.session.sessionId = userInfo.id;

    // 쿠키 옵션 설정하기
    req.session.cookie.maxAge = 1000 * 60 * 30;
    res.redirect("/userinfo");
  } else {
    req.session.sessionId = userInfo.id;
    res.redirect("/userinfo");
  }
};
