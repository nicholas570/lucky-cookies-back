const router = require('express').Router();

const NewsLetter = require('../models/newsLetter');

const validateSubscription = require('../middlewares/validations/checkNewsLetter');

router.post('/', validateSubscription, NewsLetter.subscribe);

module.exports = router;
