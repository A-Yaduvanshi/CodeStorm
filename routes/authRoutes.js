const e = require("express");
const express =require("express");
const User=require("../modules/user");
const authRouter = express.Router();

authRouter.post('/api/signup',async (req,res)=>{
   const{name,email,password}= req.body;
const existingUser= await User.findOne({email:email});
if (exitingUser) {
    return res.status(400).json({msg:'user with same email already exits!'});
}
});
let user= new User({
    email,password,name,
})
user = await user.save();
res.json({user});
module.exports=authRouter;