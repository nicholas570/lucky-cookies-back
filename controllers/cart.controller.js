const CartModel = require('../models/cart.model');

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
    const { id } = req.params;
    await CartModel.findOne(id, (err, result) => {
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
};

module.exports = CartController;
