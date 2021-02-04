# Lucky Cookies Website

![image](lucky.png?raw=true)

[Front end repository ](https://github.com/nicholas570/lucky-cookies)

### Routes:

| Method |                 Path                 |           Purpose           |
| ------ | :----------------------------------: | :-------------------------: |
| GET    |             /api/cookies             |       Get all cookies       |
| GET    |           /api/cookies/:id           |       Get one cookie        |
| POST   |          /api/cookies/carts          |        Create a cart        |
| GET    |      /api/cookies/carts/:cartId      |         Get a cart          |
| POST   |      /api/cookies/carts/:cartId      |         Add an item         |
| DELETE | /api/cookies/carts/:cartId/:cookieId |       Delete an item        |
| POST   |            /api/contacts             |      Send contact mail      |
| POST   |           /api/newsletter            | Subscribe to the newsletter |

### Techs:

- Node.js
- Express.js
- MySql
- Nodemailer
- Heroku
- Eslint / Prettier and Husky
- AirBnb style guide

### Todo:

Admin interface:

- Authentication
- POST/UPDATE/DELETE routes

### Preview here:

https://lucky-cookies.netlify.app/
