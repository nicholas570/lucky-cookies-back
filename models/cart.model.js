const db = require('../database/conf');
const { CREATE_A_CART, GET_ONE_CART } = require('../database/queries');

const CartModel = {
  create: (cb) => {
    db.query(CREATE_A_CART, (err, result) => {
      cb(err, result);
    });
  },

  findOne: (id, cb) => {
    db.query(GET_ONE_CART, [id], (err, result) => {
      cb(err, result);
    });
  },
};

module.exports = CartModel;
