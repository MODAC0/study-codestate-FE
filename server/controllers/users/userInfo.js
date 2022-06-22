const axios = require('axios');
const serverResource = require('../../data/data.js');

module.exports = async (req, res) => {
  const { accessToken } = req.body;

  // 클라이언트에서 전달받은 access token를 이용해 사용자의 정보를 가져옵니다. 다음 링크를 참고하세요.
  // https://docs.github.com/en/rest/users/users#get-the-authenticated-user
  // 이때 요청하는 서버는 Github의 Authorization 서버가 아닌 Resource Server입니다.
  return axios
    .get('https://api.github.com/user', {
      headers: {
        Authorization: `token ${accessToken}`,
      },
    })
    .then((res) => res.data)
    .then((githubUserData) => {
      res.send({ githubUserData, serverResource });
    })
    .catch((e) => {
      res.sendStatus(403);
    });
};
