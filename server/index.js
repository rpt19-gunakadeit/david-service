const express = require('express');
const app = express();
const port = 5000;
//const queries = require('./../db/queries');


app.use('/productDescription/:id', (req, res) => {
    var { id } = req.params;

    // queries.getProductDesc()
    // .then(productDesc => {
    //     res.end(productDesc);
    // })
    
})

app.use('/productBenefits/:id', (req, res) => {
    var { id } = req.params;

    // queries.getProductBenefits()
    // .then(productBenefits => {
    //     res.end(productBenefits);
    // })
    
})

app.use('/productDetails/:id', (req, res) => {
    var { id } = req.params;

    // queries.getProductDetails()
    // .then(productDetails => {
    //     res.end(productDetails);
    // })
    
})



app.listen(5000, (err) => {
    if (err) console.error(err);

    console.log(`Listening on port ${port} :)`);
})