const express = require('express');
const app = express();
const port = 5000;




app.listen(5000, (err) => {
    if (err) console.error(err);

    console.log(`Listening on port ${port} :)`);
})