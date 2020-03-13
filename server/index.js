const express = require('express');
const app = express();
const port = 5000;
const queries = require('./../db/queries');


app.use('/product/:id/description', (req, res) => {
    var { id } = req.params;

    queries.getProductDesc()
    .then(productDesc => {
        res.end(productDesc);
    })
    
})


app.listen(5000, (err) => {
    if (err) console.error(err);

    console.log(`Listening on port ${port} :)`);
})