const { check, validationResult } = require('express-validator');

const validateContact = [
  check('email').isEmail().withMessage('Email not valid'),
  check('firstName')
    .isLength({ min: 2 })
    .withMessage('must be at least 2 chars long'),
  check('lastName')
    .isLength({ min: 2 })
    .withMessage('must be at least 2 chars long'),
  check('message').isLength({ min: 5 }).withMessage('Please enter a message'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).send({
        success: false,
        message: `${errors.array()[0].param} ${errors.array()[0].msg}`,
      });
    }
    return next();
  },
];

module.exports = validateContact;
