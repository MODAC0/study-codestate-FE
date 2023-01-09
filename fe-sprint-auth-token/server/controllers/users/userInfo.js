const { USER_DATA } = require("../../db/data");
// JWT는 verifyToken으로 검증할 수 있습니다. 먼저 tokenFunctions에 작성된 여러 메서드들의 역할을 파악하세요.
const { verifyToken, generateToken } = require("../helper/tokenFunctions");

module.exports = async (req, res) => {
  /*
   * TODO: 토큰 검증 여부에 따라 유저 정보를 전달하는 로직을 구현하세요.
   *
   * Access Token에 대한 검증이 성공하면 복호화된 payload를 이용하여 USER_DATA에서 해당하는 유저를 조회할 수 있습니다.
   * Access Token이 만료되었다면 Refresh Token을 검증해 Access Token을 재발급하여야 합니다.
   * Access Token과 Refresh Token 모두 만료되었다면 상태 코드 401을 보내야합니다.
   */

  const { access_jwt, refresh_jwt } = req.cookies;

  const accessPayload = await verifyToken("access", access_jwt);
  const refreshPayload = await verifyToken("refresh", refresh_jwt);

  if (accessPayload) {
    // 검증이 잘 되었으면 유저정보를 찾는다
    const userInfo = {
      ...USER_DATA.filter((user) => user.id === accessPayload.id)[0],
    };
    if (!userInfo.id) {
      res.status(401).send("Not Authorized");
    }
    delete userInfo.password;
    res.send(userInfo);
  } else if (refresh_jwt) {
    if (!refreshPayload) {
      res.status(401).send("Not Authorized");
    }
  }

  /* 재발급 토큰을 만드는 함수 verifyToken => 인자로 타입과 토큰 */
};
