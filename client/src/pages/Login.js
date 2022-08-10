import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [loginInfo, setLoginInfo] = useState({
    userId: '',
    password: '',
  });
  const [checkedKeepLogin, setCheckedKeepLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };
  const loginRequestHandler = () => {
    /*
    TODO: Login 컴포넌트가 가지고 있는 state를 이용해 로그인을 구현합니다.
    로그인에 필요한 유저정보가 충분히 제공되지 않았다면 에러메시지가 나타나도록 구현하세요.
    return axios
      .post(login을 담당하는 endpoint)
      .then((res) => {
        로그인에 성공했다면 응답으로 받은 데이터가 Mypage에 렌더링되도록 State를 변경하세요.
      })
      .catch((err) => {
        로그인에 실패했다면 그에 대한 에러 핸들링을 구현하세요. 
      });
    */
  };

  return (
    <div className='container'>
      <div className='left-box'>
        <span>
          Education
          <p>for the</p>
          Real World
        </span>
      </div>
      <div className='right-box'>
        <h1>AUTH STATES</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className='input-field'>
            <span>ID</span>
            <input type='text' data-testid='id-input' onChange={handleInputValue('userId')} />
            <span>Password</span>
            <input
              type='password'
              data-testid='password-input'
              onChange={handleInputValue('password')}
            />
            <label className='checkbox-container'>
              <input type='checkbox' onChange={() => setCheckedKeepLogin(!checkedKeepLogin)} />
              {' 로그인 상태 유지하기'}
            </label>
          </div>
          <button type='submit' onClick={loginRequestHandler}>
            LOGIN
          </button>
          {errorMessage ? (
            <div id='alert-message' data-testid='alert-message'>
              {errorMessage}
            </div>
          ) : (
            ''
          )}
        </form>
      </div>
    </div>
  );
}
