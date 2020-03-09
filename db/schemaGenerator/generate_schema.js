const fs = require('fs');
const Promise = require('bluebird');
Promise.promisifyAll(fs);
const {
    product_descriptions_Inserts,
    benefits_Inserts,
    details_Inserts } = require('./insert_query_generators');


var schemaData = 
`DROP DATABASE IF EXISTS fec;\n\n` +

`CREATE DATABASE fec;\n\n` +

`USE fec;\n\n` +

`CREATE TABLE product_descriptions (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(250) NOT NULL,
    title VARCHAR(100) NOT NULL
);\n\n` +

`CREATE TABLE benefits (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(100) NOT NULL,
    product_id INT NOT NULL
);\n\n` +

`CREATE TABLE details (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(100) NOT NULL,
    product_id INT NOT NULL
);\n\n` +

`-- mysql -u root -p < db/schema.sql\n\n` +

`${product_descriptions_Inserts}\n\n` +

`${benefits_Inserts}\n\n` +

`${details_Inserts}\n\n`
;


fs.writeFileAsync('./db/schema.sql', schemaData)
.then(() => {
    console.log('Wrote to schema.sql');
})
.catch(err => {
    if (err) console.error(err);
})