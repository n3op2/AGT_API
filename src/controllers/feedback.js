const email = require('../lib/email');

module.exports.sendEmail = (req, res) => {
  const receiver = 'info@agtgroup.co';
  const subject = 'AGT | Feedback submitted';
  const msg = req.body.message;
  console.log('msg: ', msg);

  email.send(receiver, subject, msg, (emailErr, emailRes) => {
    if (emailErr) return console.log(emailErr);
    console.log(emailRes);
    res.send(emailRes);
  });
};
