const express = require("express");

const { addNewMessage,getMessages} = require("../controllers/message");
const router = express.Router();


router.post("/messages", addNewMessage);
router.get('/messages', getMessages)


module.exports = router;