const app = require('../index');
const request = require('supertest');
const https = require('https');
const agent = request.agent(app);
const { expect, assert } = require('chai');

//mkcert에서 발급한 인증서를 사용하기 위한 코드입니다. 삭제하지 마세요!
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

describe('Auth - Server', () => {
  describe('Protocol - HTTP over Secure', () => {
    it('🚩 HTTPS 프로토콜을 사용하는 서버여야 합니다.', () => {
      expect(app instanceof https.Server).to.equal(true);
    });
  });
  describe('POST /login', () => {
    let response;
    before(async () => {
      response = await agent.post('/login').send({
        checkedKeepLogin: false,
        loginInfo: {
          userId: 'kimcoding',
          password: '1234',
        },
      });
    });

    it('🚩 db에 존재하는 유저가 아니라면, 상태 코드 401와 함께 Not Authorized라는 메세지가 응답에 포함되어야 합니다.', async () => {
      const response = await agent.post('/login').send({
        checkedKeepLogin: true,
        loginInfo: {
          userId: 'parkhacker',
          password: 'malicious',
        },
      });

      expect(response.statusCode).to.equal(401);
      expect(response.text).to.equal('Not Authorized');
    });
    it('🚩 로그인에 성공했다면 /userinfo로 리다이렉트 되어야 합니다.', () => {
      expect(response.statusCode).to.equal(302);
      expect(response.headers.location).to.equal('/userinfo');
    });
    it('🚩 로그인 상태를 일시적으로 유지하는 요청이라면 Session Cookie로 세션 아이디를 보내야합니다.', () => {
      const cookieOptions = response.headers['set-cookie'][0];
      expect(cookieOptions).not.to.contains.oneOf(['Max-Age', 'Expires']);
    });
    it('🚩 로그인 상태를 유지하는 요청이라면 Session Cookie가 아닌 Persistent Cookie로 세션 아이디를 보내야합니다.', async () => {
      response = await agent.post('/login').send({
        checkedKeepLogin: true,
        loginInfo: {
          userId: 'kimcoding',
          password: '1234',
        },
      });

      const cookieOptions = response.headers['set-cookie'][0];
      expect(cookieOptions).to.contains.oneOf(['Max-Age', 'Expires']);
    });
  });
});
describe('GET /userinfo', () => {
  it('🚩 쿠키에 세션 아이디(connect.sid)가 없다면, 상태 코드 401와 함께 Not Authorized라는 메세지가 응답에 포함되어야 합니다.', async () => {
    const response = await agent.get('/userinfo');
    expect(response.statusCode).to.equal(401);
    expect(response.text).to.equal('Not Authorized');
  });
  it('🚩 쿠키에 저장된 세션 아이디(connect.sid)가 세션 객체와 일치하지 않는다면, 상태 코드 401와 함께 Not Authorized라는 메세지가 응답에 포함되어야 합니다.', async () => {
    const response = await agent.get('/userinfo').set('Cookie', ['connect.sid=malicious']);
    expect(response.statusCode).to.equal(401);
    expect(response.text).to.equal('Not Authorized');
  });
  it('🚩 쿠키에 저장된 세션 아이디(connect.sid)가 세션 객체와 일치한다면, 유저정보가 응답에 포함되어야 합니다.', async () => {
    const correctResponse = await agent.post('/login').send({
      checkedKeepLogin: false,
      loginInfo: {
        userId: 'kimcoding',
        password: '1234',
      },
    });
    const resCookies = correctResponse.header['set-cookie'][0];
    const response = await agent.get('/userinfo').set('Cookie', resCookies);
    const { userId, location, email } = response.body;

    expect(userId).to.equal('kimcoding');
    expect(location).to.equal('Seoul, South Korea');
    expect(email).to.equal('kimcoding@authstates.com');
    expect(response.body).not.to.have.property('password');
  });
});
describe('POST /logout', () => {
  let response, resCookies, logoutResponse;
  before(async () => {
    response = await agent.post('/login').send({
      checkedKeepLogin: false,
      loginInfo: {
        userId: 'kimcoding',
        password: '1234',
      },
    });

    resCookies = response.headers['set-cookie'][0];
    logoutResponse = await agent.post('/logout').set('Cookie', resCookies);
  });
  it('🚩 로그아웃 요청 시 205 상태코드로 응답해야 합니다.', () => {
    expect(logoutResponse.statusCode).to.equal(205);
  });
  it('🚩 로그아웃 후 유저정보를 요청한다면, 상태 코드 401이 응답에 포함되어야 합니다.', async () => {
    const response = await agent.get('/userinfo').set('Cookie', resCookies);
    expect(response.statusCode).to.equal(401);
  });
});
