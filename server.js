const express = require('express');
const app = express();
const server = require('./app/routes/agt');
const jwt = require('./app/lib/auth');

const middleWare = (req, res, next) => {
  req.middleWare = 'MIDDLEWARE!!!';
  next();
};

app.use(middleWare);
app.use(server);
app.use('/api', (req, res, next) => jwt.verifyToken(req, res, (err, resp) => {
  if (err) console.log(err);
  console.log(resp);
  next();
}));

app.listen(3000, () => {
  console.log('api server started...');
});
