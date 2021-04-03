import React, { Component }from "react";
import { withRouter } from "react-router-dom"
import axios from "axios";


class Login extends Component {
    state = { 
        username:"",
        password:"",
        error:""
    }

    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)    
    }

    handleSubmit () {
        const { username, password } = this.state
        if( username === "김코딩" && password === "1234" ){
            axios
                .post(
                "http://localhost:4000/signin",
                {
                    username,
                    password
                },
                { withCredentials: true }
                )
                .catch(err =>{
                    console.log(err)
                })
                .finally(() => {
                    this.props.handleStatus()
                })
        }
    }

    handleChange (e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() { 
        return (
            <div>
                <form onSubmit={e => e.preventDefault()}>
                    <input
                        type="text"
                        name="username"
                        placeholder="김코딩을 입력하세요"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="1234를 입력하세요"
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