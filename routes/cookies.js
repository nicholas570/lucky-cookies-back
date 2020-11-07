const express = require('express');
const con = require('../conf');

const router = express.Router();
const format = require('../controllers/cookies.js');

router.get('/', (req, res) => {
  con.query(
    `SELECT c.id, c.name, c.description, c.price, c.image, GROUP_CONCAT(ing.name) ingredients
     FROM cookie c
     JOIN cookie_ingredients c_i ON c.id = c_i.cookie_id
     JOIN ingredient ing ON ing.id = c_i.ingredient_id
     group by c.id`,
    (err, result) => {
      if (err) {
        return res.status(500).send('Something went wrong');
      }
      const formatedResult = format(result);
      return res.json(formatedResult);
    }
  );
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  con.query(
    `SELECT c.id, c.name, c.description, c.price, c.image, GROUP_CONCAT(ing.name) ingredients
     FROM cookie c
     JOIN cookie_ingredients c_i ON c.id = c_i.cookie_id
     JOIN ingredient ing ON ing.id = c_i.ingredient_id
     WHERE c.id = ?
     GROUP by c.id`,
    [id],
    (err, result) => {
      if (err) {
        return res.status(500).send('Something went wrong');
      }
      if (result.length === 0) {
        return res.status(404).send('Cookie not found');
      }
      return res.json(result);
    }
  );
});

module.exports = router;
