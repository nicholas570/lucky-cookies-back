const express = require('express');
const con = require('./conf');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get('/api/cookies', (req, res) => {
  con.query(
    'select c.id, c.name, c.description, c.price, c.image, GROUP_CONCAT(ing.name) ingredients from cookie c join cookie_ingredients c_i on c.id = c_i.cookie_id join ingredient ing on ing.id = c_i.ingredient_id group by c.id',
    (err, result) => {
      if (err) {
        return res.status(500).send('Something went wrong');
      }
      return res.json(result);
    }
  );
});

app.get('/api/cookies/:id', (req, res) => {
  const { id } = req.params;
  con.query(
    'select c.id, c.name, c.description, c.price, c.image, GROUP_CONCAT(ing.name) ingredients from cookie c join cookie_ingredients c_i on c.id = c_i.cookie_id join ingredient ing on ing.id = c_i.ingredient_id where c.id = ? group by c.id ',
    [id],
    (err, result) => {
      if (err) {
        return res.status(500).send('Something went wrong');
      }
      if (result.length === 0) {
        return res.status(404).send('Employee not found');
      }
      return res.json(result);
    }
  );
});

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
