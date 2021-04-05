const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

const con = mysql.createConnection({
  host : "localhost",
  user: "root",
  password:"   ",  
});

con.connect((err) => {    
  if(err){
    con.end() 
  }
})    

module.exports = con;

