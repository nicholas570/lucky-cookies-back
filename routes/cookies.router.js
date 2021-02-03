const router = require('express').Router();

const CookieController = require('../controllers/cookie.controller');

router.get('/', CookieController.getAll);

router.get('/:id', CookieController.getOne);

module.exports = router;
