const db = require('../database/conf');
const {
  CREATE_A_CART,
  GET_ONE_CART,
  ADD_ITEM_TO_CART,
  DELETE_AN_ITEM,
} = require('../database/queries');

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

  addItem: (item, cb) => {
    db.query(ADD_ITEM_TO_CART, [item], (err, result) => {
      cb(err, result);
    });
  },

  deleteItem: (cookieId, cartId, cb) => {
    db.query(DELETE_AN_ITEM, [cookieId, cartId], (err, result) => {
      cb(err, result);
    });
  },
};

module.exports = CartModel;
