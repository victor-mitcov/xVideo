const express = require('express');

const app = express();

app.get('/', function(req, res) {
    res.send("I'm the best of the best!");
});

app.listen(3000);