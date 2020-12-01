const express = require('express');

const NewsLetter = require('../models/newsLetter');

const router = express.Router();

const validateSubscription = require('../middlewares/validations/checkNewsLetter');

router.post('/', validateSubscription, NewsLetter.subscribe);

module.exports = router;
