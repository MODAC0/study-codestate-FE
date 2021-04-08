const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const { authToken } = require('./middleware/token')
const db = require('./db/connection')

const app = express()
app.use(express.json())
const port = 4000;

app.use(
    cors({
        origin:true,
        credentials: true
    })
)

app.post('/signin', (req, res) => {    
    const { username, password } = req.body 

    const accessToken = jwt.sign({ username }, 'secretKey', { expiresIn: "1days" })

    res.status(201).send(accessToken);
})

app.get('/', (req, res) => {
    res.status(201).send("hello World")
})

app.use(authToken)

app.get('/status', (req, res) => {
    
    if(req.username) {//jwt 토큰이 존재할 경우 데이터 베이스 연결 여부 조회
        db.query('USE test', (err) => {               
            if(err){            
                return res.status(200).send("데이터 베이스 연결 상태: 실패")                         
            }     
            return res.status(200).send("데이터 베이스 연결 상태: 성공!")
        })
    } 
})

app.listen(port,() => {
    console.log(`서버가 ${port}번에서 작동중입니다.`)
})