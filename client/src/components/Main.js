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
        <div className="session">로그인 성공</div>
        <button type="submit" onClick={this.handleLogout}>로그아웃</button>
      </div>
    );
  }
}

export default Main;
