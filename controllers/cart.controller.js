const CartModel = require('../models/cart.model');
const toSnackCase = require('../utils/toSnackCase');

const CartController = {
  create: async (req, res) => {
    await CartModel.create((err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: 'Something went wrong. Try again later',
          result: {},
          err,
        });
      }

      return CartModel.findOne(result.insertId, (error, records) => {
        if (err) {
          return res.status(500).json({
            success: false,
            message: 'Something went wrong. Try again later',
            result: {},
            err: error,
          });
        }
        if (result.length === 0) {
          return res.status(404).json({
            success: false,
            message: 'No cart found',
            result: {},
            err: '',
          });
        }

        return res.status(201).json({
          success: false,
          message: 'Successfully created a cart',
          result: records[0],
          err: '',
        });
      });
    });
  },

  getOne: async (req, res) => {
    const { cartId } = req.params;
    await CartModel.findOne(cartId, (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: 'Something went wrong. Try again later',
          result: {},
          err,
        });
      }

      if (result.length === 0) {
        return res.status(404).json({
          success: false,
          message: 'No cart found',
          result: {},
          err: '',
        });
      }

      return res.status(200).json({
        success: false,
        message: 'Successfully found this cart',
        result,
        err: '',
      });
    });
  },

  addItem: async (req, res) => {
    const item = toSnackCase(req.body);

    await CartModel.addItem(item, (err) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: 'Something went wrong. Try again later',
          result: {},
          err,
        });
      }

      return CartModel.findOne(req.body.cartId, (error, records) => {
        if (err) {
          return res.status(500).json({
            success: false,
            message: 'Something went wrong. Try again later',
            result: {},
            err: error,
          });
        }

        if (records.length === 0) {
          return res.status(404).json({
            success: false,
            message: 'No item found',
            result: {},
            err: '',
          });
        }

        return res.status(201).json({
          success: true,
          message: 'Successfully added this item',
          result: records[0],
          err: '',
        });
      });
    });
  },

  removeItem: async (req, res) => {
    const { cartId, cookieId } = req.params;
    await CartModel.deleteItem(cookieId, cartId, (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: 'Something went wrong. Try again later',
          result: {},
          err,
        });
      }

      if (!result.affectedRows) {
        return res.status(404).json({
          success: false,
          error: 'No item found',
          result: {},
          err,
        });
      }

      return res.status(200).json({
        success: false,
        message: 'Successfully deleted this item',
        result: { ...result, cookieId },
        err: '',
      });
    });
  },
};

module.exports = CartController;
