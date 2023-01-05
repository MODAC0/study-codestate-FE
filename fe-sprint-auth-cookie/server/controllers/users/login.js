const { USER_DATA } = require("../../db/data");

module.exports = (req, res) => {
  const { userId, password } = req.body.loginInfo;
  const { checkedKeepLogin } = req.body;

  // ! 데이터베이스가 오염되면 안되기 때문에 spread로 복사하여 필터링된 값을 할당
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
    res.cookie("cookieId", userInfo.id, cookiesOption);
    res.redirect("/userinfo");
  } else {
    res.cookie("cookieId", userInfo.id, cookiesOption);
    res.redirect("/userinfo");
  }
  /*
   * 클라이언트에게 바로 응답을 보내지않고 서버의 /useinfo로 리다이렉트해야 합니다.
   * express의 res.redirect 메서드를 참고하여 서버의 /userinfo로 리다이렉트 될 수 있도록 구현하세요.
   */
};
