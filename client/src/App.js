import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Mypage from './pages/Mypage';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [accessToken, setAccessToken] = useState('');

  const getAccessToken = async (authorizationCode) => {
    // 받아온 Authorization Code로 다시 OAuth App에 요청해서 Access Token을 받을 수 있습니다.
    // Access Token은 보안 유지가 필요하기 때문에 클라이언트에서 직접 OAuth App에 요청을 하는 방법은 보안에 취약할 수 있습니다.
    // Authorization Code를 서버로 보내주고 서버에서 Access Token 요청을 하는 것이 적절합니다.
    // TODO: 서버의 /callback 엔드포인트로 Authorization Code를 보내주고 Access Token을 받아옵니다.
    // Access Token을 받아온 후 state에 Access Token을 저장하세요
  };
  useEffect(() => {
    // Authorization Server로부터 클라이언트로 리디렉션된 경우, Authorization Code가 함께 전달됩니다.
    // ex) http://localhost:3000/mypage?code=5e52fb85d6a1ed46a51f
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get('code');
    if (authorizationCode) {
      getAccessToken(authorizationCode);
    }
  }, []);
  return (
    <BrowserRouter>
      <div className='main'>
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={
                isLogin ? <Mypage /*TODO: 컴포넌트에 필요한 props를 전달하세요. */ /> : <Login />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
