const express = require('express')
const session = require('express-session')
const db = require('./db')
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
    res.send("세팅 완료")
})

// app.post('/', (req, res) => {
    
//     }
// })
app.listen(port,() => {
    console.log(`서버가 ${port}번에서 작동중입니다.`)
})