const mysql = require('mysql');
const dotenv = require('dotenv');
const config = require('../config/config');
dotenv.config();

// process.env로 시작하는 모든 변수들은 환경 변수(environmental variables)입니다.
// .env.example 파일을 참고하여 .env 파일을 만들어주세요.

// 데이터베이스 연결을 만들고, 연결 객체를 export 하세요. 연결에 필요한 몇가지 정보가 있습니다.
// user : 로컬 환경의 MySQL 유저 이름을 사용해주세요.
// password : .env 파일에 설정한 MySQL 데이터베이스 비밀번호가 사용됩니다.
// host : 데이터베이스가 사용되는 위치를 반영합니다. localhost로 로컬 환경임을 알려주세요.
// 데이터베이스 이름(database)은 "cmarket"로 지정하세요.

// todo
const con = mysql.createConnection(
  config[process.env.NODE_ENV || 'development']
);

con.connect((err) => {
  if (err) throw err;
});

module.exports = con;
