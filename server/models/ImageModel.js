const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema(
     {
          imageurl: {
               type: "string",
               required: true,
          },
          categoery: {
               type: "string",
               required: true,
          },
     },
     { timestamps: true }
);
const Image = mongoose.model("Image", imageSchema);
module.exports = Image;
