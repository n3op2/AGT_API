const express = require('express');
const server = express.Router();
const agtController = require('../controllers/agt.js');

server.get('/home', agtController);

module.exports = server;