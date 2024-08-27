const express = require("express");
const { testUserController } = require("../controllers/testController");

// routes object
const router = express.Router();

//routes GET | POST | UPDATE | DELETE
router.get("/test-user", testUserController);

module.exports = router;
