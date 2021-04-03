const express = require('express');

const router = express.Router()
const db = require('../db/connection')

router.get('/status', (req, res) => {
    const { userId } = req.session
    if(userId) {
        db.query('USE test', (err) => {               
            if(err){            
                return res.status(200).send("데이터 베이스 연결 실패")                         
            }     
            return res.status(200).send("데이터 베이스 연결 성공")
        })
    } else {
        res.status(401).end()
    }
})

router.post('/signin', (req, res) => {    
    const { username, password } = req.body  

    req.session.userId = username;        
    res.status(201).send("OK");
})

router.delete('/signout',(req, res) => {
    
    req.session.destroy()
    res.clearCookie('test_deploy')
    res.end()
})



module.exports = router;