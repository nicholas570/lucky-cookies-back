const transporter = require('../nodemailer/config');

require('dotenv').config();

const NewsLetterController = {
  subscribe: (req, res) => {
    try {
      const mailOptions = {
        from: req.body.email,
        to: process.env.MAIL,
        subject: 'New subscription to the newsletter!',
        html: `
        <p>You have a new contact request.</p>
        <h3>Contact Details</h3>
        <ul>
          <li>Name: ${req.body.firstName}</li>
          <li>Name: ${req.body.lastName}</li>
          <li>Email: ${req.body.email}</li>
          <li>Subject: New subscription to the newsletter!</li>
        </ul>
        `,
      };
      transporter.sendMail(mailOptions, (err) => {
        if (err) {
          res.status(500).send({
            success: false,
            message: 'Something went wrong. Try again later',
            err,
          });
        } else {
          res.send({
            success: true,
            message: 'Thanks for subscribing. We will get back to you shortly',
          });
          NewsLetterController.confirm(req, res);
        }
      });
    } catch (error) {
      res.status(500).send({
        success: false,
        message: 'Something went wrong. Try again later',
        error,
      });
    }
  },

  confirm: (req, res) => {
    try {
      const mailOptions = {
        from: process.env.MAIL,
        to: req.body.email,
        subject: 'Lucky Cookies newsletter confirmation',
        html: `
        <h2>Congrats</h2>
        <p>You've just subscribed to our newsletter!</p>
        <p>You will receive it every 28th!</p>
        <p>See you soon at Lucky Cookies</p>
        `,
      };
      transporter.sendMail(mailOptions, (err) => {
        if (err) {
          res.status(500).send({
            success: false,
            message: 'Something went wrong. Try again later',
          });
        } else {
          res.send({
            success: true,
            message: 'Thanks for subscribing. We will get back to you shortly',
          });
        }
      });
    } catch (error) {
      res.status(500).send({
        success: false,
        message: 'Something went wrong. Try again later',
      });
    }
  },
};

module.exports = NewsLetterController;
