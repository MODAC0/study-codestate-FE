const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

const con = mysql.createConnection({
  host : "localhost",
  user: "root",
  password: "안가르쳐주지",  
});

con.connect((err) => {    
  if(err){
    con.end() 
  }
})    

module.exports = con;

