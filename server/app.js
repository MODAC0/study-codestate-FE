const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { authToken } = require('./middleware/token');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

// const mysql = require('mysql2/promise');

// // code from https://github.com/GoogleCloudPlatform/nodejs-docs-samples/blob/HEAD/cloud-sql/mysql/mysql/server.js
// // [START cloud_sql_mysql_mysql_create_tcp]
// const createTcpPool = async config => {
//   // Extract host and port from socket address

//   // Establish a connection to the database
//   return mysql.createPool({
//     user: process.env.DATABASE_USER, // e.g. 'my-db-user'
//     password: process.env.DATABASE_PASSWORD, // e.g. 'my-db-password'
//     // database: 'process.env.DB_NAME', // e.g. 'my-database'
//     host: process.env.DATABASE_HOST, // e.g. '127.0.0.1'
//     port: process.env.DATABASE_PORT, // e.g. '3306'
//     // ... Specify additional properties here.
//     ...config
//   });
// };

// const createPool = async () => {
//   const config = {
//     // [START cloud_sql_mysql_mysql_limit]
//     // 'connectionLimit' is the maximum number of connections the pool is allowed
//     // to keep at once.
//     connectionLimit: 5,
//     // [END cloud_sql_mysql_mysql_limit]

//     // [START cloud_sql_mysql_mysql_timeout]
//     // 'connectTimeout' is the maximum number of milliseconds before a timeout
//     // occurs during the initial connection to the database.
//     connectTimeout: 10000, // 10 seconds
//     // 'acquireTimeout' is the maximum number of milliseconds to wait when
//     // checking out a connection from the pool before a timeout error occurs.
//     acquireTimeout: 10000, // 10 seconds
//     // 'waitForConnections' determines the pool's action when no connections are
//     // free. If true, the request will queued and a connection will be presented
//     // when ready. If false, the pool will call back with an error.
//     waitForConnections: true, // Default: true
//     // 'queueLimit' is the maximum number of requests for connections the pool
//     // will queue at once before returning an error. If 0, there is no limit.
//     queueLimit: 0 // Default: 0
//     // [END cloud_sql_mysql_mysql_timeout]

//     // [START cloud_sql_mysql_mysql_backoff]
//     // The mysql module automatically uses exponential delays between failed
//     // connection attempts.
//     // [END cloud_sql_mysql_mysql_backoff]
//   };

//   return createTcpPool(config);
// };

// const ensureSchema = async pool => {
//   // Wait for tables to be created (if they don't already exist).
//   await pool.query('select 1+1');
//   console.log('Ensured SQL works');
// };

// const createPoolAndEnsureSchema = async () =>
//   await createPool()
//     .then(async pool => {
//       return pool;
//     })
//     .catch(err => {
//       console.log(err);
//       throw err;
//     });

// let pool;
// app.use(async (req, res, next) => {
//   if (pool) {
//     return next();
//   }
//   try {
//     pool = await createPoolAndEnsureSchema();
//     next();
//   } catch (err) {
//     console.log(err);
//     return next(err);
//   }
// });

app.use(express.json());

const port = process.env.NODE_ENV === 'test' ? 4999 : 80;

app.use(
  cors()
);

app.post('/signin', (req, res) => {
  const { username, password } = req.body;
  if (username === '김코딩' && password === '1234') {
    const accessToken = jwt.sign({ username }, 'secretKey', { expiresIn: '1days' });
    console.log(accessToken);
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
    res.status(200).send({
      isLogin: true,
      isConnectedToDatabase: false
    });
  }
});

app.listen(port, () => {
  console.log(`서버가 ${port}번에서 작동중입니다.`);
});
