import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Mypage from "./pages/Mypage";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [accessToken, setAccessToken] = useState("");

  const getAccessToken = async (authorizationCode) => {
    const result = await axios.post("https://localhost:4000/callback", {
      authorizationCode,
    });
    const { accessToken } = result.data;
    try {
      setIsLogin(true);
      setAccessToken(accessToken);
    } catch (err) {
      alert(err);
    }
  };
  useEffect(() => {
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get("code");
    if (authorizationCode) {
      getAccessToken(authorizationCode);
    }
  }, []);
  return (
    <BrowserRouter>
      <div className="main">
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                isLogin ? (
                  <Mypage accessToken={accessToken} setIsLogin={setIsLogin} />
                ) : (
                  <Login />
                )
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
