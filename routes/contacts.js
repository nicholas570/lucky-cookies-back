const express = require('express');

const Contacts = require('../models/contacts');

const router = express.Router();

const validateContact = require('../middlewares/validations/checkContact');

router.post('/', validateContact, Contacts.send);

module.exports = router;
