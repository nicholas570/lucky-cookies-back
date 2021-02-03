const db = require('../database/conf');
const { GET_ALL_COOKIES, GET_ONE_COOKIE } = require('../database/queries');

const CookieModel = {
  findAll: (cb) => {
    db.query(GET_ALL_COOKIES, (err, result) => {
      cb(err, result);
    });
  },

  findOne: (id, cb) => {
    db.query(GET_ONE_COOKIE, [id], (err, result) => {
      cb(err, result);
    });
  },
};

module.exports = CookieModel;
