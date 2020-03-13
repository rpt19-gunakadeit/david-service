const mysql = require('mysql');
const Promise = require('bluebird');
const database = 'fec';

var db = mysql.createConnection({
    user: 'nodeuser',
    password: 'nodeuser@1234'
})

db =  Promise.promisifyAll(db);


module.exports.db = db;