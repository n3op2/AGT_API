const express = require('express');
const routes = express.Router();
const agt = require('../controllers/agt');
const feedback = require('../controllers/feedback');

console.log(agt);

routes.get('/home', agt.test);
routes.post('/feedback', feedback.sendEmail);

module.exports = routes;
