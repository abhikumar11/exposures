const Image=require("../models/ImageModel");
exports.saveImage=async(req,res)=>{
    const imageurl=req.body.imageurl;
    const categoery=req.body.categoery;
    try {
        const image=new Image({
            imageurl:imageurl,
            categoery:categoery
        });
        await image.save();
        if(image){
            const responseData = {
                type:"success",
                message:"Image Saved",
                status:true,
            }
            return res.status(200).send(JSON.stringify(responseData));
        }
    } catch (err) {
        const responseData = {
            type:"error",
            message:err.message,
            staus:false,
        }
       return res.status(500).send(JSON.stringify(responseData));
    }
}
exports.getImages=async(req,res)=>{
    try {
        const categoery = req.params.categoery;
        let images = [];
        if(categoery=="all"){
             images = await Image.find({});
        }
        else{
             images = await Image.find({categoery:req.params.categoery});
        }
        
        if(images.length > 0){
            const responseData ={
                type:"success",
                images:images,
                message:"Images Fetched Successfully",
                status:true,
            }
            return res.status(200).send(JSON.stringify(responseData));
        }
        else{
            const responseData ={
                type:"info",
                message:"No image found",
                status:false,
            }
            return res.status(200).send(JSON.stringify(responseData));
        }
    } catch (err) {
        const responseData ={
            type:"warning",
            message:err.message,
            status:false,
        }
        return res.status(404).send(JSON.stringify(responseData));
    }
}