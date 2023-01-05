const { USER_DATA } = require("../../db/data");

module.exports = (req, res) => {
  const cookieId = req.cookies.cookieId;
  const userInfo = {
    ...USER_DATA.filter((user) => user.id === cookieId)[0],
  };
  console.log(req.cookies);
  if (!cookieId || !userInfo.id) {
    res.status(401).send("Not Authorized");
  } else {
    // 비밀번호는 민감한 정보라서 삭제 후에 보내야 합니다.
    delete userInfo.password;
    res.send(userInfo);
  }
};
