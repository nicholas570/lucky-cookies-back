const transporter = require('../nodemailer/config');

require('dotenv').config();

const ContactsController = {
  send: async (req, res) => {
    try {
      const mailOptions = {
        from: req.body.email,
        to: process.env.MAIL,
        subject: req.body.subject,
        html: `
        <p>You have a new contact request.</p>
        <h3>Contact Details</h3>
        <ul>
          <li>Name: ${req.body.firstName}</li>
          <li>Name: ${req.body.lastName}</li>
          <li>Email: ${req.body.email}</li>
          <li>Subject: ${req.body.subject}</li>
          <li>Message: ${req.body.message}</li>
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

        return res.status(200).json({
          success: true,
          message: 'Thanks for contacting us. We will get back to you shortly',
          result: {},
          err: '',
        });
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: 'Something went wrong. Try again later',
        result: {},
        err,
      });
    }
  },
};

module.exports = ContactsController;
