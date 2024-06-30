const express = require("express");
const multer  = require('multer')
const upload = multer({ dest: 'uploads/avatar/' })
const { registerUser,loginUser,findAllUser } = require("../controllers/users");
const router = express.Router();


router.post("/register", upload.single('avatar'), registerUser);
router.post("/login", loginUser);
router.get('/users', findAllUser)


module.exports = router;