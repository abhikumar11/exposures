const User=require("../models/UserModel");
const bcrypt = require("bcrypt");
exports.signUp=async(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    const flag=await User.findOne({email:email});
    if(flag){
        const responseData = {
            type:"error",
            message:"Email already exists",
            status:false,
        }
        res.status(404).send(JSON.stringify(responseData));
        return;
    }
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);
      
        try {
            const user=new User({
                email:email,
                password:hashedPassword,
            });
           const saveUser = user.save();
           const responseData = {
            type:"success",
            message:"User Created",
            status:true,
        }
        res.status(200).send(JSON.stringify(responseData));

        } catch (err) {
            const responseData = {
                type:"error",
                message:err.message,
                staus:false,
            }
            res.status(500).send(JSON.stringify(responseData));
        }


}