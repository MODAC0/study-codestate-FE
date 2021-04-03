import React, { Component }from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import axios from "axios";

import Login from './components/login'
import Main from './components/Main'

class App extends Component {
  state = { 
    isLogin: false,
    status: "이름에 김코딩을, 비밀번호로 1234를 입력해서 로그인 해주세요"
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
          console.log(res.data)
          if(res.data){
            this.setState({
              isLogin: true,
              status: res.data
            })
          } 
        })        
        .catch(err => console.log(err))
        .finally(() => this.props.history.push('/'))
  }

  changeLoginStatus (){
    this.setState({
      isLogin: false,
      status: "이름에 김코딩을, 비밀번호로 1234를 입력해서 로그인 해주세요"
    })
    this.props.history.push("/")
  }
  
  render() { 
    const { isLogin } = this.state

    return (     
      <div>
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
      );
  }
}
 
export default withRouter(App);
