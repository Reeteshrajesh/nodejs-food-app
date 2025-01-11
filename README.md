# Food App Backend

This is a backend server for a Food App built using Node.js, Express, MongoDB, and JWT for authentication. It includes routes for user authentication, restaurant management, food categories, food items, and order placement.

## Project Setup

### Prerequisites

- **Node.js**: Ensure you have Node.js installed on your machine. If not, download and install Node.js from [here](https://nodejs.org/).
- **MongoDB Atlas**: You should have a MongoDB Atlas account and a cluster set up. The MongoDB URL will be used for connecting the backend to the database.

### Steps to Run the Project

1. **Clone the Repository**  
   First, clone the repository to your local machine:
   ```bash
   git clone https://github.com/Reeteshrajesh/nodejs-food-app.git
   cd nodejs-food-app
2. **Install Dependencies**
   After navigating to the project directory, run the following command to install all required dependencies:
   ```bash
    npm install

3. **Create .env File**
Create a .env file in the root directory of the project and add the following environment variables:
   ```bash
   PORT=8080
   MONGO_URL=mongodb+srv://<username>:<password>@cluster0.l98frwm.mongodb.net/food-app
   JWT_SECRET=mysecretvalue

Replace <username> and <password> with your MongoDB Atlas credentials.

4. **Run the Server**
After setting up the .env file, run the following command to start the server:
      ```bash
   npm run server

The server will now be running on the specified port (default is 8080).
         
-------

## API Endpoints

### Auth Routes

    POST /api/v1/auth/register
    Registers a new user.
    Request body:

{<br>
  "email": "user@example.com",<br>
  "password": "password123"<br>
}

GET /api/v1/auth/login<br>
Logs in an existing user.<br>
***Request body:***

    {
      "email": "user@example.com",
      "password": "password123"
    }

### User Routes

    GET /api/v1/user
    Get details of the logged-in user (requires authentication).
    Headers:
    Authorization: Bearer <JWT_Token>

    PUT /api/v1/user
    Update the details of the logged-in user (requires authentication).<br>
    ***Request body:***

{<br>
  "name": "New Name",<br>
  "email": "newemail@example.com"<br>
}

POST /api/v1/user/update-password<br>
Update the user's password (requires authentication).
Request body:

{<br>
  "currentPassword": "oldpassword",<br>
  "newPassword": "newpassword123"<br>
}

POST /api/v1/user/reset-password<br>
Reset the user's password (requires email verification).<br>
***Request body:***

    {
      "email": "user@example.com"
    }

    DELETE /api/v1/user
    Delete the logged-in user's account (requires authentication).
    Headers:
    Authorization: Bearer <JWT_Token>

### Restaurant Routes

    POST /api/v1/resturant
    Create a new restaurant (requires admin authentication).<br>
    ***Request body:***

    {
      "name": "Restaurant Name",
      "address": "Restaurant Address"
    }

    GET /api/v1/resturant
    Get a list of all restaurants.

    GET /api/v1/resturant/:id
    Get details of a specific restaurant by ID.

    DELETE /api/v1/resturant/:id
    Delete a restaurant by ID (requires admin authentication).

### Category Routes

    GET /api/v1/category
    Get a list of all food categories.

    POST /api/v1/category
    Create a new food category (requires admin authentication).<br>
    ***Request body:***

{<br>
  "name": "Category Name"<br>
}

PUT /api/v1/category/:id<br>
Update a food category by ID (requires admin authentication).<br>
***Request body:***

    {
      "name": "Updated Category Name"
    }

    DELETE /api/v1/category/:id
    Delete a food category by ID (requires admin authentication).

### Food Routes

    POST /api/v1/food
    Create a new food item (requires admin authentication).<br>
    ***Request body:***

{
  "name": "Food Item",<br>
  "price": 10.99,<br>
  "categoryId": "category_id",<br>
  "restaurantId": "restaurant_id"<br>
}

GET /api/v1/food<br>
Get a list of all food items.

GET /api/v1/food/:id<br>
Get details of a specific food item by ID.

GET /api/v1/food/restaurant/:restaurantId<br>
Get all food items by a specific restaurant.

PUT /api/v1/food/:id
Update a food item by ID (requires admin authentication).<br>
 ***Request body:***

    {
      "name": "Updated Food Item",
      "price": 12.99
    }

    DELETE /api/v1/food/:id
    Delete a food item by ID (requires admin authentication).

### Order Routes

    GET /api/v1/order
    Place a new order.<br>
    ***Request body:***

    {
      "foodItems": [
        {
          "foodId": "food_id",
          "quantity": 2
        }
      ],
      "userId": "user_id",
      "restaurantId": "restaurant_id"
    }

    GET /api/v1/order/status/:orderId
    Get the status of a specific order by ID.

## Environment Variables

  PORT: The port the server will run on (default: 8080).<br>
    MONGO_URL: The MongoDB connection URL for your MongoDB Atlas cluster.<br>
    JWT_SECRET: The secret used for generating and verifying JWT tokens.

## Technologies Used

  **Node.js:** JavaScript runtime for the server-side code.<br>
  **Express:** Web framework for building the API.<br>
  **MongoDB:** NoSQL database for storing app data.<br>
  **JWT:** JSON Web Token for authentication and authorization.<br>
  **bcryptjs:** Library for hashing passwords securely.<br>
  **dotenv:** Loads environment variables from a .env file.<br>
  **morgan:** HTTP request logger middleware.<br>
  **cors:** Middleware to enable cross-origin requests.<br>


## Author

This project is developed and maintained by **[Reetesh kumar]**.

- **GitHub**: [@Reetesh kumar](https://github.com/Reeteshrajesh)
- **LinkedIn**: [@Reetes hKumar](https://www.linkedin.com/in/reetesh-kumar-850807255/)
- **Twitter**: [@uttam_reetesh](https://x.com/uttam_reetesh)


## License

MIT

## Contributing

Pull requests are welcome.<br> For major changes, please open an issue first to discuss what you would like to change.<br>
Please make sure to update tests as appropriate.
