import { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = ({ checkStatus }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/signin`,
        {
          username,
          password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        localStorage.setItem('accessToken', res.data);
        checkStatus();
      })
      .catch((err) => {
        setUsername('');
        setPassword('');
        if (err.response.status === 401) {
          alert('이름과 비밀번호를 정확히 입력해주세요!');
        }
      });
  };

  return (
    <div className="form-container">
      <form
        className="form-items"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="login">Login</div>
        <input
          type="text"
          name="username"
          placeholder="이름"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default Login;
