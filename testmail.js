const nodemailer = require('nodemailer');
const mailgunTransport = require('nodemailer-mailgun-transport');

// Create a Mailgun transporter using your API key and domain
const auth = {
  auth: {
    api_key: '9c3d27d87036f810ef7c6408414fc764-7ca144d2-e7624b06',
    domain: 'sandbox22127d72c9df4c6bada121cb901e2d2f.mailgun.org', // Replace with your Mailgun domain
  },
};

const transporter = nodemailer.createTransport(mailgunTransport(auth));

// Email content
const mailOptions = {
  from: 'sender@example.com',
  to: 'sanandhan@salesforce.com',
  subject: 'Hello from Node.js and Mailgun',
  text: 'This is a test email sent with Node.js and Mailgun!',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
