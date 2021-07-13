import mongoose from "mongoose";

const URL='mongodb://alokkumar:alok1234@ecommerceweb-shard-00-00.ybyqy.mongodb.net:27017,ecommerceweb-shard-00-01.ybyqy.mongodb.net:27017,ecommerceweb-shard-00-02.ybyqy.mongodb.net:27017/ECOMMERCE?ssl=true&replicaSet=atlas-fjd0qj-shard-0&authSource=admin&retryWrites=true&w=majority'

const connectDB=async()=>{
    try{
        await mongoose.connect(URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false
        });
        console.log("database connected succesfully");
    }catch(err){
        console.log('Error in connection :',err.message);
    }
    
}

export default connectDB;
