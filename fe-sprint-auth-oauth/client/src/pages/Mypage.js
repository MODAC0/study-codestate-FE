import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "./components/Loading";
import User from "./components/UserInfo";

export default function Mypage({ accessToken, setIsLogin }) {
  const [githubUser, setGithubUser] = useState(null);
  const [serverResource, setServerResource] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const logoutHandler = () => {
    // TODO: /logout을 통해 사용자가 로그아웃되도록 구현하세요.
    axios
      .delete("https://localhost:4000/logout", {
        data: { accessToken },
      })
      .then((res) => setIsLogin(false))
      .catch((e) => alert(e.response.stateusText));
  };

  useEffect(() => {
    // TODO: /userinfo를 통해 사용자 정보를 받아오세요.
    axios
      .post("https://localhost:4000/userinfo", { accessToken })
      .then((res) => {
        const { githubUserData, serverResource } = res.data;
        setGithubUser(githubUserData);
        setServerResource(serverResource);
        setIsLoading((state) => !state);
      })
      .catch((e) => alert(e.response.stateusText));
  }, [accessToken]);

  return (
    <>
      <div className="left-box">
        {!isLoading && (
          <span>
            {`${githubUser.login}`}님,
            <p>반갑습니다!</p>
          </span>
        )}
      </div>
      <div className="right-box">
        <div className="input-field">
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
