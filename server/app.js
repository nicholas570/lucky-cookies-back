/* eslint-disable no-console */
const app = require('../index');

const port = process.env.PORT || 8080;

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Express server listening on ${port}`);
  }
});
