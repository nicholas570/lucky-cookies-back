const router = require('express').Router();
const CartController = require('../controllers/cart.controller');

router.post('/', CartController.create);
router.get('/:cartId', CartController.getOne);
router.post('/add-item', CartController.addItem);

module.exports = router;
