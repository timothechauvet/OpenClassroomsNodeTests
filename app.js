const express = require('express');

const app = express();

app.use((req, res) => {
    console.log("rekete ressu");
    next();
})

module.exports = app;