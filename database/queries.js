module.exports = {
  GET_ALL_COOKIES: `SELECT c.id, c.name, c.description, c.price, c.image, GROUP_CONCAT(ing.name) ingredients
  FROM cookie c
  JOIN cookie_ingredients c_i ON c.id = c_i.cookie_id
  JOIN ingredient ing ON ing.id = c_i.ingredient_id
  group by c.id`,
  GET_ONE_COOKIE: `SELECT c.id, c.name, c.description, c.price, c.image, GROUP_CONCAT(ing.name) ingredients
      FROM cookie c
        JOIN cookie_ingredients c_i ON c.id = c_i.cookie_id
        JOIN ingredient ing ON ing.id = c_i.ingredient_id
        WHERE c.id = ?
        GROUP by c.id`,
  CREATE_A_CART: 'INSERT INTO cart (id) values (null)',
  GET_ONE_CART: `SELECT cookie_id, cart_id, quantity, name, price, image
    FROM cart
    JOIN cookie_cart ON cart.id = cookie_cart.cart_id
    JOIN cookie ON cookie_cart.cookie_id = cookie.id
    WHERE cart.id = ?`,
  ADD_ITEM_TO_CART: 'INSERT INTO cookie_cart set ?',
  DELETE_AN_ITEM: 'DELETE FROM cookie_cart WHERE cookie_id = ? AND cart_id = ?',
};
