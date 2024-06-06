const express = require("express");

const { registerUser,loginUser,findAllUser } = require("../controllers/users");
const router = express.Router();


router.post("/register", registerUser);
router.post("/login", loginUser);
router.get('/users', findAllUser)


module.exports = router;