import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Mypage from "./pages/Mypage";
import React, { useEffect, useState } from "react";
import axios from "axios";

// 모든 요청에 withCredentials가 true로 설정됩니다.
axios.defaults.withCredentials = true;

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const authHandler = () => {
    return axios
      .get("https://localhost:4000/login")
      .then((res) => {
        setIsLogin(true);
        setUserInfo(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  useEffect(() => {
    // 컴포넌트 생성 시 아래 함수가 실행됩니다.
    authHandler();
  }, []);

  return (
    <BrowserRouter>
      <div className="main">
        <Routes>
          <Route
            path="/"
            element={
              isLogin ? (
                <Mypage
                  userInfo={userInfo}
                  setIsLogin={setIsLogin}
                  setUserInfo={setUserInfo}
                />
              ) : (
                <Login setIsLogin={setIsLogin} setUserInfo={setUserInfo} />
              )
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
