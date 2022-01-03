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
        <div className="session">정답은 노트북입니다</div>
        <div className="db">유어클래스로 돌아가 퀴즈를 풀어주세요</div>
        <button type="submit" onClick={this.handleLogout}>로그아웃</button>
      </div>
    );
  }
}

export default Main;
