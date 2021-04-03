const express = require('express')
const session = require('express-session')
const cors = require('cors')
const router = require('./routes')

const app = express()
app.use(express.json())
const port = 4000;

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
        secure: false,
        httpOnly: true,
        sameSite:'Lax'
    },
    saveUninitialized: false,
    resave: false
}))

app.use('/', router)

app.listen(port,() => {
    console.log(`서버가 ${port}번에서 작동중입니다.`)
})