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
    let response, resCookies;
    before(async () => {
      response = await agent.post('/login').send({
        checkedKeepLogin: false,
        loginInfo: {
          userId: 'kimcoding',
          password: '1234',
        },
      });
      resCookies = response.headers['set-cookie'].join(',');
    });
    describe('Cookie Option', () => {
      it('쿠키 옵션중 Domain 옵션은 `localhost`로 설정되어야 합니다', () => {
        expect(resCookies).include('Domain=localhost;');
      });

      it('쿠키 옵션중 Path 옵션은 `/`로 설정되어야 합니다', () => {
        expect(resCookies).include('Path=/;');
      });

      it('쿠키 옵션중 HttpOnly 옵션이 설정되어야 합니다', () => {
        expect(resCookies).include('HttpOnly');
      });

      it('쿠키 옵션중 Secure 옵션이 설정되어야 합니다', () => {
        expect(resCookies).include('Secure');
      });

      it('쿠키 옵션중 SameSite 옵션은 `none`으로 설정되어야 합니다', () => {
        expect(resCookies).include('SameSite=None');
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
    it('🚩 로그인 상태를 일시적으로 유지하는 요청이라면 Session Cookie를 보내야합니다.', () => {
      const cookieOptions = response.headers['set-cookie'][0];
      expect(cookieOptions).not.to.contains.oneOf(['Max-Age', 'Expires']);
    });
    it('🚩 로그인 상태를 유지하는 요청이라면 Session Cookie가 아닌 Persistent Cookie를 보내야합니다.', async () => {
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
  it('🚩 쿠키에 cookieId가 없다면, 상태 코드 401와 함께 Not Authorized라는 메세지가 응답에 포함되어야 합니다.', async () => {
    const response = await agent.get('/userinfo');
    expect(response.statusCode).to.equal(401);
    expect(response.text).to.equal('Not Authorized');
  });
  it('🚩 쿠키에 저장된 cookieId가 유저정보와 일치하지 않는다면, 상태 코드 401와 함께 Not Authorized라는 메세지가 응답에 포함되어야 합니다.', async () => {
    const response = await agent.get('/userinfo').set('Cookie', ['cookieId=malicious']);
    expect(response.statusCode).to.equal(401);
    expect(response.text).to.equal('Not Authorized');
  });
  it('🚩 쿠키에 저장된 cookieId가 유저정보와 일치한다면, 유저정보가 응답에 포함되어야 합니다.', async () => {
    const response = await agent.get('/userinfo').set('Cookie', ['cookieId=0']);
    const { id, userId, location, email } = response.body;

    expect(id).to.equal('0');
    expect(userId).to.equal('kimcoding');
    expect(location).to.equal('Seoul, South Korea');
    expect(email).to.equal('kimcoding@authstates.com');
  });
  it('🚩 응답에 포함된 유저정보에 비밀번호가 담겨있지 않아야 합니다.', async () => {
    const response = await agent.get('/userinfo').set('Cookie', ['cookieId=0']);
    const { id, userId, location, email, password } = response.body;
    console.log('---', password);
    expect(id).to.equal('0');
    expect(userId).to.equal('kimcoding');
    expect(location).to.equal('Seoul, South Korea');
    expect(email).to.equal('kimcoding@authstates.com');
    expect(password).to.equal(undefined);
  });
});
describe('POST /logout', () => {
  let response;
  before(async () => {
    response = await agent.post('/logout').set('Cookie', ['cookieId=0']);
  });
  it('🚩 로그아웃 요청 시 205 상태코드로 응답해야 합니다.', () => {
    expect(response.statusCode).to.equal(205);
  });
  it('🚩 로그아웃 요청 시 쿠키를 초기화해야 합니다.', () => {
    const cookieOptions = response.headers['set-cookie'][0];
    expect(cookieOptions).to.not.contains('cookieId=0');
  });
});
