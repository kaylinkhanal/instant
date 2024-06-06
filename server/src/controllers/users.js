const User = require('../models/users')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');


const registerUser =  async (req, res)=> {
  try{
    // check if phoneNumber exists
    const userExists = await User.exists({"phoneNumber":req.body.phoneNumber})
    if(!userExists){
      //encrypt the password
     const hashPassword  = await bcrypt.hash(req.body.password, saltRounds);
     req.body.password= hashPassword
     //save req.body to db
     await User.create(req.body)
      res.json({msg:"User Registered Successfully"})
    }else{
      res.status(409).json({msg:"Phone Already Taken"})
    }
  }catch(err){
    console.log(err)
  }
  }


  const loginUser =  async (req, res)=> {
    try{
      // check if phoneNumber exists
      const user = await User.findOne({"phoneNumber":req.body.phoneNumber})
      if(user){
        //decrypt and compare
          const isMatched = await bcrypt.compare(req.body.password, user.password);
          if(isMatched){
            //generate a token here
            const token = jwt.sign({ phoneNumber: req.body.phoneNumber }, process.env.SECRET_KEY);
            res.json({token, msg: "Authorized",user })
          }else{
            res.status(401).json({msg:"Incorrect Password!!"})
          }
      }else{
        res.status(409).json({msg:"Phone Number is not registered."})
      }
    }catch(err){
      console.log(err)
    }
    }

    const findAllUser = async (req, res)=> {
      const list=  await User.find()
      res.send(list)
    }
  

// login:
// //1. phoneNumber
// //2. password check by decrypting
// //3. token 


module.exports = {registerUser,loginUser,findAllUser}
