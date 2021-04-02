const express = require('express')
const session = require('express-session')
const db = require('./db/connection')
const cors = require('cors')

const app = express()
app.use(express.json())
const port = 3000;

app.use(
    cors({
        origin:true,
        credentials: true
    })
)

app.use(session({
    name: 'test_deploy',
    secret: 'codestates',
    cookie: { 
        secure: true,
        httpOnly: true,
        sameSite:'none'
    },
    saveUninitialized: false,
    resave: false
}))

app.get('/', (req, res) => {
    const { userId } = req.session
    console.log(userId)
    if(!userId){
      res.status(200).send({
          isLogin: false,
          message: "아이디:김코딩, 비밀번호:1234를 입력해서 로그인해주세요"
      })
    }else {
        db.query('USE test',(err) => {               
            if(err){            
                return res.status(503).send({
                    isLogin: true,
                    message: "데이터 베이스에 연결되지 않았습니다"
                })           
            }     
            return res.status(200).send({
                isLogin: true,
                message: "데이터 베이스에 성공적으로 연결 되었습니다"
            })
        })
    }  
})

app.post('/', (req, res) => {    
    const { username, password } = req.body
    if(username !== '김코딩' && password !== '1234'){
        res.status(400).send('아이디나 비밀번호가 일치하지 않습니다');
    }else{                       
        req.session.userId = username;        
        res.send("OK");
    }    
})

app.listen(port,() => {
    console.log(`서버가 ${port}번에서 작동중입니다.`)
})