const nodemailer = require('nodemailer');
const creds = require('../../private/configs/email');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: '465',
  secure: true,
  auth: {
    user: creds.user,
    pass: creds.pass
  }
});

// TODO: use async/await
module.exports.send = (to, subject, data, cb) => {
  const options = {
    to,
    from: '"AGT APP" <info@agtgroup.co>',
    subject,
    html: data
  };
  transporter.sendMail(options, (err, res) => {
    if (err) return cb(err);
    cb(null, res);
  });
};
