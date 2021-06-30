## node-rest-shop-api
a restful shop api made with node.js express.js and mongodb atlas

## How to run the app?
- Run `npm install` to install required dependencies.
- Start the express crud api
  - `nodemon server.js` to start the api server
  
## API calls
### GET request `/products/`
- `GET` to get all products
### POST request `/products/`
- `POST` to post new products
- The request body needs to be in form-data format and include the following properties:

      price - Integer - Required
      name - String - Required
      productImage - png file - Requried

### GET request `/orders/`
- `GET` to get all orders
- needs authetication
### POST request `/orders/`
- `POST` to post new order
- The request body needs to be in JSON format and include the following properties:

      productId - String - Required
      quantity - Integer - Required
      

### DELETE request `/products/:productId`
- `DELETE` to DELETE products
- needs authetication
### DELETE request `/orders/:orderId`
- `DELETE` to DELETE orders
- needs authetication


### PATCH request `/products/:productId`
- `PATCH` to update existing products
- The request body needs to be in form-data format and include the following properties:

      price - Integer - Required
      name - String - Required
      productImage - png file - Requried
### PATCH request `/orders/:orderId`
- `PATCH` to update existing order
- The request body needs to be in JSON format and include the following properties:

      productId - String - Required
      quantity - Integer - Required      
