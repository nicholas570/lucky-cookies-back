const router = require('express').Router();
const contactRouter = require('./contact.router');
const newsLetterRouter = require('./newsLetter.router');
const cookieRouter = require('./cookies.router');
const cartRouter = require('./cart.router');

router.use('/contact', contactRouter);
router.use('/newsletter', newsLetterRouter);
router.use('/cookies', cookieRouter);
router.use('/cart', cartRouter);

module.exports = router;
