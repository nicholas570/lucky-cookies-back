const router = require('express').Router();

router.post('/', (req, res) => {
  res.send('cart');
});

module.exports = router;
