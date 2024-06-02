const User = require('../models/users')


const registerUser =  async (req, res)=> {
  const userExists = await User.exists({"phoneNumber":req.body.phoneNumber})
  if(!userExists){
    User.create(req.body)
    res.json({msg:"User Registered Successfully"})
  }else{
    res.status(409).json({msg:"Phone Already Taken"})
  }
  }

module.exports = {registerUser}
