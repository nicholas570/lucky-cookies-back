const express = require('express');

const NewsLetter = require('../models/newsLetter');

const router = express.Router();

router.post('/', [NewsLetter.subscribe, NewsLetter.confirm]);

module.exports = router;
