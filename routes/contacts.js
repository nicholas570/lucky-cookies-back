const express = require('express');

const Contacts = require('../models/contacts');

const router = express.Router();

router.post('/', Contacts.send);

module.exports = router;
