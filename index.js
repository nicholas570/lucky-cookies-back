const express = require('express');
// const con = require('./conf');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`server listening on ${port}`);
});
