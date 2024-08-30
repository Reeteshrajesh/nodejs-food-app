.env file have PORT,MONGO_URL and JWT_SECRET
(PORT = port no. 

MONGO_URL = mongodb+srv://username:password@cluster0.l98frwm.mongodb.net/food-app

JWT_SECRET = mysecretvalue)

for running this project npm install and  use (npm run server)

"dependencies": {
    bcryptjs
    colors
    cors
    dotenv
    express
    jsonwebtoken
    mongoose
    morgan
  }
  
use postman for client side 
(✓ food-app
AUTH
   POST register
   GET login
User
   GET GET USER
   PUT UPDATE USER
   POST UPDATE PASSWORD
   POST RESET PASSWORD
   DEL DELETE ACCOUNT
RESTURANTS
   POST CREATE RESTURANT
   GET GET ALL RESTURANT
   GET GET RESTURANT BY ID
   DEL delete resturant
CATEGORY
  GET CREATE CAT
  GET GET ALL CAT
  PUT UPDATE CAT
  DEL New Request
FOOD
  POST CREATE FOOD
  GET GET ALL FOOD
  GET GET SINGLE FOOD
  GET BY RESTURANT ID
  GET UPDATE FOOD
  GET DELETE FOOD
ORDERS
  GET PLACE ORDER
  GET ORDER STATUS) make apis.
