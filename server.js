const express = require("express");
const path = require('path');

let app = express();

app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
    res.render('./index.html');
});

app.listen( 8080, () => {
    console.log( "listening on PORT 8080" );
})