const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { authToken } = require('./middleware/token');
const db = require('./db/connection');

const app = express();
app.use(express.json());
const port = 80;

app.use(
  cors({
    origin: true,
    credentials: true
  })
);

app.post('/signin', (req, res) => {
  const { username, password } = req.body;
  if (username === '김코딩' && password === '1234') {
    const accessToken = jwt.sign({ username }, 'secretKey', { expiresIn: '1days' });
    res.status(201).send(accessToken);
  } else {
    res.status(401).send('Login Failed');
  }
});

app.get('/', (req, res) => {
  res.status(201).send('Hello World');
});

app.get('/status', authToken, (req, res) => {
  if (req.username) { // jwt 토큰이 존재할 경우 데이터베이스 연결 여부 조회
    db.query('use test', (err) => {
      if (err) {
        return res.status(200).send({
          isLogin: true,
          isConnectedToDatabase: false
        });
      }
      return res.status(200).send({
        isLogin: true,
        isConnectedToDatabase: true
      });
    });
  }
});

app.listen(port, () => {
  console.log(`서버가 ${port}번에서 작동중입니다.`);
});
