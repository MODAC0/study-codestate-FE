import React, { Component } from 'react';
import axios from 'axios';

import Login from './components/Login';
import Main from './components/Main';
import './App.css';

class App extends Component {
  state = {
    isLogin: false,
    status: ''
  };

  constructor(props) {
    super(props);
    this.handleStatus = this.handleStatus.bind(this);
    this.changeLoginStatus = this.changeLoginStatus.bind(this);
  }

  componentDidMount() {
    this.handleStatus();
  }

  handleStatus() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/status`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      .then((res) => {
        this.setState({
          isLogin: res.data.isLogin,
          status: res.data.isConnectedToDatabase
        });
      })
      .catch((err) => console.log(err));
  }

  changeLoginStatus() {
    this.setState({
      isLogin: false,
      status: ''
    });
  }

  render() {
    const { isLogin } = this.state;

    return (
      <div className="app">
        <div className="container">
          {isLogin
            ? (
              <>
                <div className="success">로그인에 성공했습니다</div>
                <Main changeLoginStatus={this.changeLoginStatus} />
              </>
            )
            : (
              <>
                <div className="status">
                이름에는 김코딩,비밀번호에는 1234만 입력 가능합니다
                </div>
                <Login handleStatus={this.handleStatus} />
              </>
            )}
        </div>
      </div>
    );
  }
}

export default App;
