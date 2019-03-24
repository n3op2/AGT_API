const auth = require('../lib/auth');

const myTASKS = [{ a: 'b'}, { a: 'x' }];

module.exports.test = (req, res) => {
  console.log('test controller');
  const data = { name: 'paul' };
  const token = auth.generateToken(data);
  req.token = token;
  res.send(token);
};
