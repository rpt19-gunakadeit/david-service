const db = require('../db');

module.exports.getPoductDesc = (id) => {
    var query = `SELECT * FROM product_descriptions WITH id = ${id}`;
    return db.queryAsync(query)
}

