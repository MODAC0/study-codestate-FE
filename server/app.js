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
    db.query('USE test',(err,results,fields) => {          
        if(err){            
            return res.status(503).send("데이터 베이스가 없습니다")           
        }     
        return res.status(200).send("데이터 베이스가 있습니다")
    })    
})

app.post('/', (req, res) => {    
    const { username, password } = req.body
    if(username !== 'KimCoding' && password !== '12341234'){
        res.status(400).send('not authorized' );
    }else{                       
        req.session.userId = username;        
        res.send("OK");
    }    
})

app.listen(port,() => {
    console.log(`서버가 ${port}번에서 작동중입니다.`)
})