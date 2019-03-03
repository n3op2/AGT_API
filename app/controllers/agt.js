const jwt = require('../lib/auth');

const myTASKS = [{ a: 'b'}, { a: 'x' }];

module.exports = agtController = (req, res) => {
  console.log(req.middleWare);
  const token = jwt.generateToken({ name: 'paul' });
  req.token = token;
  res.send(token);
};