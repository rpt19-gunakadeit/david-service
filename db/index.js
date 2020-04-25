const mysql = require('mysql');
const Promise = require('bluebird');
// const password = require('./db_password.js');
// const database = 'fec';


var db = mysql.createConnection({
    user: 'nodeuser',
    password: 'nodeuser@1234',
    database: 'nike'
})

db =  Promise.promisifyAll(db);

db.connectAsync().
then(() => {
    console.log('connected to mySQL');
    return db.queryAsync(`USE nike`);
})

module.exports = db;


