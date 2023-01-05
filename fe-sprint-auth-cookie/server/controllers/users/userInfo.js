const { USER_DATA } = require("../../db/data");

module.exports = (req, res) => {
  const cookieId = req.cookies.cookieId;
  const userInfo = {
    ...USER_DATA.filter((user) => user.id === cookieId)[0],
  };
  if (!cookieId || !userInfo.id) {
    res.status(401).send("Not Authorized");
  } else {
    // 비밀번호는 민감한 정보라서 삭제 후에 보내야 합니다.
    delete userInfo.password;
    res.send(userInfo);
  }
  /*
   * TODO: 쿠키 검증 여부에 따라 유저 정보를 전달하는 로직을 구현하세요.
   *
   * 로그인 시 설정한 쿠키가 존재하는 지 확인해야 합니다.
   * 아직 로그인을 하지 않았다면 쿠키가 존재하지 않을 수 있습니다.
   * 쿠키에 유저의 id가 존재하는지 확인하고 싶다면 콘솔에 req.cookies를 출력해보세요.
   */
};
