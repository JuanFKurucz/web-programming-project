const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

/**
 * Sends an email
 * @param {string} to destination email
 * @param {string} text content of the email
 */
const emailService = async (to, text) => {
  const mailOptions = {
    from: 'correoprogramacionwebApp@gmail.com',
    to,
    subject: 'Plataforma de votaciones',
    text,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
};

module.exports = emailService;
