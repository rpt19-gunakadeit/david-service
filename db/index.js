const mysql = require('mysql');
const Promise = require('bluebird');

var db = mysql.createConnection({
    user: 'root',
    password: 'pw',
    database: 'nike'
})

db =  Promise.promisifyAll(db);

db.connectAsync().
then(() => {
    console.log('connected to mySQL');
    return db.queryAsync(`USE nike`);
})

module.exports = db;


