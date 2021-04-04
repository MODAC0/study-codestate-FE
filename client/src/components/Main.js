import React, { Component }from "react"
import axios from "axios"
import './main.css'


class Main extends Component {
    constructor(props){
        super(props)
        this.handleLogout = this.handleLogout.bind(this)
    }
    
    handleLogout () {
        axios
            .delete(
            "http://localhost:4000/signout",
            { withCredentials: true }
            )
            .then( res => {
                this.props.changeLoginStatus()  
            })
            .catch( err => {
                console.log(err)
            })
      }
    render() { 
        return (
            <div className="main-container">
                <div className="session">세션을 정상적으로 받았습니다</div>
                <div className="db">데이터 베이스 연결 상태를 확인하세요</div>
                <button type="submit" onClick={this.handleLogout}>로그아웃</button>
            </div>  
        );
    }
}
 
export default Main;