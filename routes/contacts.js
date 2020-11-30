const express = require('express');

const Contacts = require('../models/contacts');

const router = express.Router();

const validateContact = require('../middlewares /checkcontact');

router.post('/', validateContact, Contacts.send);

module.exports = router;
