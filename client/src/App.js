import React, { Component }from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import axios from "axios";

import Login from './components/login'
import Main from './components/main'
import './App.css'

class App extends Component {
  state = { 
    isLogin: false,
    status: ""

  }
  constructor(props){
    super(props)
    this.handleStatus = this.handleStatus.bind(this)
    this.changeLoginStatus =this.changeLoginStatus.bind(this)
  }

  componentDidMount () {
    this.handleStatus()
  }

  handleStatus () {
    axios
        .get("http://localhost:4000/status",{ withCredentials:true })
        .then(res => {
            this.setState({
              isLogin: true,
              status: res.data
            },() => {
              this.props.history.push('/')
            })
        })        
        .catch(err => console.log(err))
  }

  changeLoginStatus (){
    this.setState({
      isLogin: false,
      status: ""
    }, () => {
      this.props.history.push("/")
    })
  }
  
  render() { 
    const { isLogin, status } = this.state

    return (     
      <div className="app">
        <div className="container">
          {
            status
            ? (status==='데이터 베이스 연결 상태: 성공!'
                ? (<div className="success">{status}</div>)
                : (<div className="fail">{status}</div>)
              )
            : (<div className="status">이름에는 김코딩,비밀번호에는 1234만 입력 가능합니다</div>)
          }
          <Switch>
            <Route
              exact
              path='/main'
              render={() => <Main changeLoginStatus={this.changeLoginStatus}/>}/>
            <Route
              exact
              path='/login'
              render={() => <Login handleStatus={this.handleStatus}/>}/> 
            <Route
              path='/'
              render={() => {
                if (isLogin) {
                  return <Redirect to='/main'/>;
                }
                return <Redirect to='/login'/>;
              }}
            /> 
          </Switch>
        </div>
      </div>
      );
  }
}
 
export default withRouter(App);
