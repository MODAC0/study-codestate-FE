import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit() {
    const { username, password } = this.state;

    axios
      .post(
        `${process.env.REACT_APP_API_URL}/signin`,
        {
          username,
          password
        },
        { withCredentials: true }
      )
      .then(res => {
        localStorage.setItem('accessToken', res.data);
        this.props.handleStatus();
      })
      .catch(err => {
        this.setState({
          username: '',
          password: ''
        });
        if (err.response.status === 401) {
          alert('이름과 비밀번호를 정확히 입력해주세요!');
        }
      });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div className="form-container">
        <form className="form-items" onSubmit={e => e.preventDefault()}>
          <div className="login">Login</div>
          <input
            type="text"
            name="username"
            placeholder="이름"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            value={this.state.password}
            onChange={this.handleChange}
          />

          <button type="submit" onClick={this.handleSubmit}>로그인</button>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
