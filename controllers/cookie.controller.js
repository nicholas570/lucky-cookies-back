const CookieModel = require('../models/cookie.model');

const format = require('../utils/format');

const CookieController = {
  getAll: (req, res) => {
    CookieModel.findAll((err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: 'Something went wrong. Try again later',
          result: {},
          err,
        });
      }
      const formatedResult = format(result);
      return res.status(200).json({
        success: true,
        message: 'Successfully retrieved this cookies',
        result: formatedResult,
        err: '',
      });
    });
  },

  getOne: (req, res) => {
    const { id } = req.params;
    CookieModel.findOne(id, (err, result) => {
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
          message: 'No cookie found',
          result: {},
          err: '',
        });
      }
      const formatedResult = format(result);
      return res.status(200).json({
        success: false,
        message: 'Successfully retrived this cookie',
        result: formatedResult,
        err: '',
      });
    });
  },
};

module.exports = CookieController;
