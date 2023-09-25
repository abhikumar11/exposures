const express=require("express");
const app = express();
const port=3001;
const cors = require("cors");
const bodyParser = require('body-parser');
const { generateToken, validateUser, validateUrl } = require("./middleware/auth");
const connectDb=require("./config/mongoose");
const { data } = require("./ProductData");
const { signUp } = require("./controllers/User");
const { saveImage,getImages } = require("./controllers/Image");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors());
connectDb();
app.post("/api/signup",signUp);
app.post('/api/login',generateToken,(req, res)=>{
    const responseData = {
        type:"success",
        message:"Login successful",
        status:true,
    }
    res.status(200).send(JSON.stringify(responseData));
}); 
app.post("/api/saveimage",saveImage)

app.get("/api/getimages/:categoery",getImages);


app.listen(port,()=>{
    console.log(`listening on port: ${port}`);
})