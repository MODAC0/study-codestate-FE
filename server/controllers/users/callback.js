require('dotenv').config();
const axios = require('axios');
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
module.exports = async (req, res) => {
  // req의 body로 authorization code가 들어옵니다. console.log를 통해 서버의 터미널창에서 확인해보세요!
  console.log(req.body);
  // authorization code를 이용해 access token을 발급받기 위한 post 요청을 보냅니다. 다음 링크를 참고하세요.
  // https://docs.github.com/en/free-pro-team@latest/developers/apps/identifying-and-authorizing-users-for-github-apps#2-users-are-redirected-back-to-your-site-by-github
  try {
    const result = await axios({
      method: 'post',
      url: `https://github.com/login/oauth/access_token`,
      headers: {
        accept: 'application/json',
      },
      data: {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: req.body.authorizationCode,
      },
    });
    const accessToken = result.data.access_token;

    return res.status(200).send({ accessToken });
  } catch (err) {
    return res.status(401).send({ message: 'error' });
  }
};
