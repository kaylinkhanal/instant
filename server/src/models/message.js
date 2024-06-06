const mongoose = require('mongoose');
const { Schema } = mongoose;

const messageSchema = new Schema({
  message: String, 
  senderId: String,
  receiverId: String,
});

const Message = mongoose.model('Message', messageSchema);
module.exports = Message
