const nodemailer = require('nodemailer');

export default class EmailHelper {
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'Gmail', // Update with your email service
      auth: {
        user: 'b2ctrialsandbox@gmail.com',
        pass: 'yrbvhhjzyudxuyye'
      }
    });
  }

  sendHtmlEmail(to, subject, htmlContent) {
    const mailOptions = {
      from: 'your_email@example.com',
      to,
      subject,
      html: htmlContent
    };

    this.transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });
  }
}

