const router = require('express').Router();

const ContactsController = require('../controllers/contacts.controller');

const validateContact = require('../middlewares/validations/checkContact');

router.post('/', validateContact, ContactsController.send);

module.exports = router;
