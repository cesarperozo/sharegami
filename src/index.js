const express = require('express');

const config = require('./server/config');

//database
require('./database');

//
const app = config(express());
const port = process.env.APP_PORT || 80;
//start server
app.listen(port, () => {
    console.log('Server on port', port)
});

