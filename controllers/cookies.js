const format = (data) =>
  data.map((cookie) => ({
    id: cookie.id,
    name: cookie.name,
    description: cookie.description,
    price: cookie.price,
    image: cookie.image,
    ingredients: cookie.ingredients.split(','),
  }));

module.exports = format;
