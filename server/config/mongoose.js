const mongoose= require("mongoose");
const connectDb=()=>{
        mongoose.connect("mongodb://localhost:27017/nodecrud",{
         useNewUrlParser: true,
         useUnifiedTopology: true
        });
       const conn=mongoose.connection;
       conn.on("error",console.error.bind(console,"unable to connect to database"));
       conn.once("open",()=>{
        console.log('connected to database');
       })
       
}
module.exports=connectDb;