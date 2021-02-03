const router = require('express').Router();

const NewsLetter = require('../controllers/newsLetter.controller');

const validateSubscription = require('../middlewares/validations/checkNewsLetter');

router.post('/', validateSubscription, NewsLetter.subscribe);

module.exports = router;
