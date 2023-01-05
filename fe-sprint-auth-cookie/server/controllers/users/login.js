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

  console.log(cookiesOption);

  if (userInfo.id === undefined) {
    res.status(401).send("Not Authorized");
  } else if (checkedKeepLogin === true) {
    // max-age 옵션으로 작성하는 경우
    cookiesOption.maxAge = 1000 * 60 * 30;
    // 단위는 ms(밀리세컨드 === 0.001초)이니 주의하세요! -> 이렇게 작성할 경우 30분동안 쿠키를 유지합니다.
    res.cookie("cookieId", userInfo.id, cookiesOption);
  } else {
    res.cookie("cookieId", userInfo.id, cookiesOption);
  }
  /*
   * 클라이언트에게 바로 응답을 보내지않고 서버의 /useinfo로 리다이렉트해야 합니다.
   * express의 res.redirect 메서드를 참고하여 서버의 /userinfo로 리다이렉트 될 수 있도록 구현하세요.
   */
};
