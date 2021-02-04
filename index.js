/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const api = require('./routes');
const { toCamelCase } = require('./middlewares/formatToCamelCase');

const port = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(toCamelCase());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use('/api', api);

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Express server listening on ${port}`);
  }
});
