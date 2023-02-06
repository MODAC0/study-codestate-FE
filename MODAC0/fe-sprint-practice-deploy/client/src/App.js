import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios';

import Login from './components/Login';
import Main from './components/Main';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isConnectedToDatabase, setIsConnectedToDatabase] = useState(false);
  const navigate = useNavigate();

  const checkStatus = () => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}/status`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then((res) => {
        setIsLogin(res.data.isLogin);
        setIsConnectedToDatabase(res.data.isConnectedToDatabase);
        navigate('/main');
      })
      .catch((err) => console.log(err));
  };

  const logout = () => {
    setIsLogin(false);
    setIsConnectedToDatabase('');
    navigate('/');
  };

  useEffect(() => {
    checkStatus();
  }, []);

  return (
    <div className="app">
      <div className="container">
        <div className="statusContainer">
          {isLogin ? (
            <div className="success">로그인에 성공했습니다</div>
          ) : (
            <div className="status">
              이름에는 김코딩,비밀번호에는 1234만 입력 가능합니다
            </div>
          )}
          {isLogin ? (
            isConnectedToDatabase ? (
              <div className="success">데이터베이스 연결에 성공했습니다</div>
            ) : (
              <div className="fail">하지만, 데이터베이스 연결이 필요합니다</div>
            )
          ) : (
            ''
          )}
        </div>

        <Routes>
          <Route path="/login" element={<Login checkStatus={checkStatus} />} />
          <Route
            path="/main"
            element={<Main isLogin={isLogin} logout={logout} />}
          />
          <Route
            exact
            path="/"
            element={
              isLogin ? <Navigate to="/main" /> : <Navigate to="/login" />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
