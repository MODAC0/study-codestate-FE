import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    localStorage.removeItem('accessToken');
    this.props.changeLoginStatus();
  }

  render() {
    return (
      <div className="main-container">
        <div className="session">토큰을 정상적으로 받았습니다</div>
        <div className="db">데이터베이스 연결 상태를 확인하세요</div>
        <button type="submit" onClick={this.handleLogout}>로그아웃</button>
      </div>
    );
  }
}

export default Main;
