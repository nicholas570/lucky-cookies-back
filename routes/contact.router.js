const router = require('express').Router();

const Contacts = require('../models/contacts');

const validateContact = require('../middlewares/validations/checkContact');

router.post('/', validateContact, Contacts.send);

module.exports = router;
