require('dotenv').config();
const axios = require('axios');
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

module.exports = (req, res) => {
  const { accessToken } = req.body;
  // 클라이언트에서 전달받은 access token를 이용해 사용자의 권한 부여를 취소합니다. 다음 링크를 참고하세요.
  // https://docs.github.com/en/rest/apps/oauth-applications
  axios
    .delete(`https://api.github.com/applications/${CLIENT_ID}/token`, {
      data: {
        access_token: accessToken,
      },
      auth: {
        username: CLIENT_ID,
        password: CLIENT_SECRET,
      },
    })
    .then(() => {
      res.status(205).send('Successfuly Logged Out');
    })
    .catch((e) => {
      console.log(e.response);
    });
};
