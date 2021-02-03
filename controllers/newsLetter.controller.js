const transporter = require('../nodemailer/config');

require('dotenv').config();

const NewsLetterController = {
  subscribe: async (req, res) => {
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

      await transporter.sendMail(mailOptions, (err) => {
        if (err) {
          return res.status(500).json({
            success: false,
            message: 'Something went wrong. Try again later',
            result: {},
            err,
          });
        }
        return NewsLetterController.confirm(req, res);
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Something went wrong. Try again later',
        error,
      });
    }
  },

  confirm: async (req, res) => {
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
      await transporter.sendMail(mailOptions, (err) => {
        if (err) {
          return res.status(500).json({
            success: false,
            message: 'Something went wrong. Try again later',
            result: {},
            err,
          });
        }

        return res.status(200).json({
          success: true,
          message: 'Thanks for subscribing. We will get back to you shortly',
          result: {},
          err: '',
        });
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Something went wrong. Try again later',
        result: {},
        error,
      });
    }
  },
};

module.exports = NewsLetterController;
