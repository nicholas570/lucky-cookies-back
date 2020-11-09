const express = require('express');
const cors = require('cors');

const cookies = require('./routes/cookies');
const contacts = require('./routes/contacts');

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use('/api/cookies', cookies);
app.use('/contacts', contacts);

app.listen(port, (err) => {
  if (err) {
    throw new Error(err);
  } else {
    // eslint-disable-next-line
    console.log(`server listening on port ${port}`);
  }
});
