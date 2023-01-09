import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from './components/Loading';
import User from './components/UserInfo';

export default function Mypage(/*TODO: 컴포넌트에 필요한 props를 전달하세요.*/) {
  const [githubUser, setGithubUser] = useState(null);
  const [serverResource, setServerResource] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const logoutHandler = () => {
    // TODO: /logout을 통해 사용자가 로그아웃되도록 구현하세요.
    // prop으로 받은 Access Token을 이용해 /logout 엔드포인트로 요청을 보내야합니다.
    // 요청이 성공했다면 isLogin 상태를 false로 업데이트해야 합니다.
  };

  useEffect(() => {
    // TODO: /userinfo를 통해 사용자 정보를 받아오세요.
    // prop으로 받은 Access Token을 이용해 /userinfo 엔드포인트로 요청을 보내야합니다.
    // 응답으로 받은 데이터를 githubUser, serverResource의 상태로 업데이트해야합니다.
    // isLoading 상태를 false로 업데이트해야 합니다.
  }, []);

  return (
    <>
      <div className='left-box'>
        {!isLoading && (
          <span>
            {`${githubUser.login}`}님,
            <p>반갑습니다!</p>
          </span>
        )}
      </div>
      <div className='right-box'>
        <div className='input-field'>
          {isLoading ? (
            <Loading />
          ) : (
            <User
              githubUser={githubUser}
              serverResource={serverResource}
              logoutHandler={logoutHandler}
            />
          )}
        </div>
      </div>
    </>
  );
}
