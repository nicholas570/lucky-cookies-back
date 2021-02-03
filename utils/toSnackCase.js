const snakeCaseKeys = require('snakecase-keys');

module.exports = (obj) => {
  let body = obj;
  return (body = snakeCaseKeys(body, { deep: true }));
};
