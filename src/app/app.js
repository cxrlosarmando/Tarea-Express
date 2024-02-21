const express = require('express')
const router = require('../routers/user.router.js')
const app = express()
const morgan = require('morgan');


app.use(morgan('dev'));
app.use(express.json());
app.use(router);



module.exports = app;