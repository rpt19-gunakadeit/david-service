const fs = require('fs');
const Promise = require('bluebird');
Promise.promisifyAll(fs);
product_descriptions_Inserts = require('./insert_query_generators');


var schemaData = 
`DROP DATABASE IF EXISTS nike;\n\n` +

`CREATE DATABASE nike;\n\n` +

`USE nike;\n\n` +

`CREATE TABLE product_descriptions (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(250) NOT NULL,
    textBlock VARCHAR(2000) NOT NULL
);\n\n` +

`-- mysql -u root -p < db/schema.sql\n\n` +

`${product_descriptions_Inserts}\n\n`

;


fs.writeFileAsync('./db/schema.sql', schemaData)
.then(() => {
    console.log('Wrote to schema.sql');
})
.catch(err => {
    if (err) console.error(err);
})