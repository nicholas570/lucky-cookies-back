const express = require('express');
const con = require('../conf');

const router = express.Router();

router.get('/', (req, res) => {
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

router.get('/:id', (req, res) => {
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

module.exports = router;
