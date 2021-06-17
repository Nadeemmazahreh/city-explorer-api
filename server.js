'use strict';
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');


const server = express();
server.use(cors());

const PORT = process.env.PORT;

const weatherHandler = require('./Modules/Weather.js')
server.get('/weather',weatherHandler)

const movieHandl = require('./Modules/Movies.js')
server.get('/movie', movieHandl)

server.listen(PORT, () => {
    console.log(`Listening to PORT ${PORT}`);
})