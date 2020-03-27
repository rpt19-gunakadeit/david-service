const db = require('../db');

module.exports.getProductDesc = (id) => {
    console.log(id, typeof id);
    var query = `SELECT * FROM product_descriptions WHERE id = ${id}`;
    return db.queryAsync(query)
}

