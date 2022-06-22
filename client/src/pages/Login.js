import React from 'react';
import githubLogo from './../images/github.png';

export default function Login() {
  const CLIENT_ID = 'FILL_ME_IN';

  const loginRequestHandler = () => {
    // TODO: GitHub로부터 사용자 인증을 위해 GitHub로 이동해야 합니다. 적절한 URL을 입력하세요.
    // OAuth 인증이 완료되면 authorization code와 함께 callback url로 리디렉션 합니다.
    // 참고: https://docs.github.com/en/free-pro-team@latest/developers/apps/identifying-and-authorizing-users-for-github-apps
    return window.location.assign(
      `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`
    );
  };

  return (
    <>
      <div className='left-box'>
        <span>
          Education
          <p>for the</p>
          Real World
        </span>
      </div>
      <div className='right-box'>
        <div className='right-box'>
          <h1>AUTH STATES</h1>
          <h3>OAuth 2.0 소셜 로그인</h3>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className='input-field'>
              <button type='submit' onClick={loginRequestHandler}>
                <img id='logo' alt='logo' src={githubLogo} />
                <span> LOGIN WITH GITHUB</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
