const express = require('express');
const app = express();
const port = 5000;
const queries = require('./../db/queries');

app.use((req, res, next) => { 
    console.log(req.method, req.url);
    next();
});

app.use('/t/:product/:style', express.static('./public/description'));
app.use('/t/:product/:style', express.static('./public/dist'));
app.use('/carousel', express.static('./public/carousel'));
app.use('/carousel', express.static('./public/dist'));


app.get('/product/:id/description', (req, res) => {
    var { id } = req.params;
    id = Number(id);
    console.log(id);
    queries.getProductDesc(id)
    .then(productDesc => {
        res.header("Access-Control-Allow-Origin", "*");
        res.status(200).send(JSON.stringify(productDesc[0]));
    })
    
})


app.listen(port, (err) => {
    if (err) console.error(err);

    console.log(`Listening on port ${port} :)`);
})



module.exports = app;
