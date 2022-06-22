require('dotenv').config();
const axios = require('axios');
const CLIENT_ID = process.env.CLIENT_ID;

module.exports = (req, res) => {
  const accessToken = req.body.accessToken;
  // 클라이언트에서 전달받은 access token를 이용해 사용자의 권한 부여를 취소합니다. 다음 링크를 참고하세요.
  // https://docs.github.com/en/rest/apps/oauth-applications
  axios
    .delete(`https://github.com/applications/${CLIENT_ID}/token`, {
      client_id: CLIENT_ID,
      access_token: accessToken,
    })
    .then((res) => {
      res.staus(205).send('Successfuly Logged Out');
    })
    .catch((e) => {
      console.log(e.response);
    });
};
