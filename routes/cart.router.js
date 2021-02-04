const router = require('express').Router();
const CartController = require('../controllers/cart.controller');

router.post('/', CartController.create);
router.get('/:cartId', CartController.getOne);
router.post('/:cartId', CartController.addItem);
router.delete('/:cartId/:cookieId', CartController.removeItem);

module.exports = router;
