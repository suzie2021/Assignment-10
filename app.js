const express = require('express');
require('dotenv').config()
const bodyParser = require('body-parser');

// route imports
const todoRoutes = require('./routes/todoRoutes');

const { PORT } = process.env || 4000 
const { WELCOME_MESSAGE } = process.env


// declare app isntance
const app = express();

// load middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true }))

// load routes to app
app.use('/todos', todoRoutes)

// spin up the server 
app.listen(PORT, ()=> {
    let message = `${WELCOME_MESSAGE} http://localhost:${PORT}`
    console.log(message)
})