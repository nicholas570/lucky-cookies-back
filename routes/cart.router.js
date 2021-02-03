const router = require('express').Router();
const CartController = require('../controllers/cart.controller');

router.post('/', CartController.create);
router.get('/', (req, res) => {
  res.send('ejf');
});
// router.post('/:id', CartController.addItem);

module.exports = router;
