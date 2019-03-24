const jwt = require('jsonwebtoken');

const tokenOptions = { expiresIn: 60 * 60 };

module.exports.generateToken = (user) => {
  return jwt.sign(user, 'pwd', tokenOptions);
};

module.exports.verifyToken = (req, res, cb) => {
  console.log('verify')
  const token = req.headers.token;
  console.log(req.headers)
  jwt.verify(token, 'pwd', (err, user) => {
    if (err) return cb(err);
    req.user = user;
    cb(null, user)
  });
}