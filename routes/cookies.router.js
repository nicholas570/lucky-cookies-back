const express = require('express');

const Cookie = require('../models/cookie');

const router = express.Router();

router.get('/', Cookie.getAll);

router.get('/:id', Cookie.getOne);

module.exports = router;
