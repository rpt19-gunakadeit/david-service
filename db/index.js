const mysql = require('mysql');
const Promise = require('bluebird');
// const password = require('./db_password.js');
// const database = 'fec';


var db = mysql.createConnection({
    host: 'essentialsdb.cdrgzta9njwc.us-west-1.rds.amazonaws.com',
    user: 'admin',
    password: 'password',
    port: 3306
})

db =  Promise.promisifyAll(db);

db.connectAsync().
then(() => {
    console.log('connected to mySQL');
    return db.queryAsync(`USE nike`);
})



module.exports = db;


