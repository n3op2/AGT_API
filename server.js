// TODO refactor app using TypeScript
const express = require('express');
const app = express();
const routes = require('./src/routes/noauth');
const auth = require('./src/lib/auth');
const bodyParser = require('body-parser');
const cors = require('cors');

const middleWare = (req, res, next) => {
  req.middleWare = 'MIDDLEWARE!!!';
  next();
};

app.use(bodyParser.json());
app.use(cors());
app.use(middleWare);
app.use('/api', (req, res, next) => auth.verifyToken(req, res, (err, resp) => {
  if (err) console.log(err);
  console.log(resp);
  next();
}));

app.use(routes);

app.listen(3005, () => {
  console.log('api server started...');
});
