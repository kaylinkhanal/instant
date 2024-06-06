const Message = require('../models/message')


    const addNewMessage = async (req, res)=> {
      const list=  await Message.create(req.body)
      res.send(list)
    }
  
    const getMessages = async (req, res)=> {
      const list=  await Message.find()
      res.send(list)
    }



module.exports = {getMessages, addNewMessage}
