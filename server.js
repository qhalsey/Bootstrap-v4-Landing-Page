const express = require("express");
const path = require('path');

let app = express();

app.set("port", (process.env.PORT || 5000 ));
app.use(express.static((__dirname)));

app.get("/", (req, res) => {
    res.render('./index.html');
});

app.listen( app.get("port"), () => {
    console.log( "listening on PORT: " + app.get('port') );
});