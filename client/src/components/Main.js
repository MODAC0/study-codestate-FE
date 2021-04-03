import React, { Component }from "react"
import axios from "axios"



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
            .catch( err => {
              console.log(err)
            })
            .finally(() => {
              this.props.changeLoginStatus()
            })
      }
    render() { 
        return (
            <div>
                <button onClick={this.handleLogout}>로그아웃</button>

            </div>  
        );
    }
}
 
export default Main;