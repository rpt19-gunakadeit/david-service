const express = require('express');
const app = express();
const port = 5000;
const queries = require('./../db/queries');

app.use(express.static('./public'))

app.use('/product/:id/description', (req, res) => {
    var { id } = req.params;
    id = Number(id);

    queries.getProductDesc(id)
    .then(productDesc => {
        res.end(JSON.stringify(productDesc[0]));
    })
    
})


app.listen(5000, (err) => {
    if (err) console.error(err);

    console.log(`Listening on port ${port} :)`);
})