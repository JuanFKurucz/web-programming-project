const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'correoprogramacionwebApp@gmail.com',
    pass: 'correoprogramacionwebApp2020',
  },
});

export const emailService = async (to) => {
  const mailOptions = {
    from: 'correoprogramacionwebApp@gmail.com',
    to,
    subject: 'Sending Email using Node.js',
    text: 'That was easy!',
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${  info.response}`);
    }
  });
};

export default emailService;
