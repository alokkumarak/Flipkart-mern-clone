import User from './userSchema.js';
import Product from './model.js';


export const userSignup=async(req,res)=>{
    try {
        const UserExist=await User.findOne({username:req.body.username});
        if(UserExist){
            return res.status(401).json('user already exist');     
        }
        const user=req.body;
        const newUser=new User(user);
         await newUser.save();

         res.status(200).json('user successfully registered')

    } catch (error) {
        console.log("Error:",error.message);
    }    
}

export const userLogin=async(req,res)=>{
     try {
       const user=await User.findOne({username:req.body.username, password:req.body.password});
       if(user){
           return res.status(200).json(`${req.body.username} login successfull`)
       }else{
           return res.status(401).json("invalid login credential")
       }
    } catch (error) {
       console.log("error in login :",error.message);
    }

}



export const getProducts=async(req,res)=>{
   try {
      const products=await Product.find({});
      res.json(products);

   } catch (error) {
       console.log("Error in fetching all the data from database",error.message);
   }
}

export const getProductById=async(req,res)=>{
    try {
        const product=await Product.findOne({'id':req.params.id})
        res.json(product);
    } catch (error) {
        console.log("Error :",error.message);
    }
}