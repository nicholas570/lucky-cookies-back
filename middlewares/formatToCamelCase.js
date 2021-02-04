const camelCaseKeys = require('camelcase-keys');

const formatMiddlewares = {
  toCamelCase: () => (req, res, next) => {
    const performSend = res.json;
    res.json = (body) => {
      performSend.call(res, camelCaseKeys(body, { deep: true }));
    };
    next();
  },
};

module.exports = formatMiddlewares;
