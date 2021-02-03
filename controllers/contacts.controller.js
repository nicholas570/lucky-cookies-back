const transporter = require('../nodemailer/config');

require('dotenv').config();

const ContactsController = {
  send: (req, res) => {
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
      transporter.sendMail(mailOptions, (err) => {
        if (err) {
          res.status(500).send({
            success: false,
            message: 'Something went wrong. Try again later',
          });
        } else {
          res.send({
            success: true,
            message:
              'Thanks for contacting us. We will get back to you shortly',
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

module.exports = ContactsController;
