import React, { useRef } from "react";
import message from "../config/Notification";
import { Link, useNavigate } from "react-router-dom";

const ImageForm = () => {
     const imageRef = useRef();
     const categoeryRef = useRef();
     const navigate = useNavigate();
     const handleSubmit = (e) => {
          e.preventDefault();
          const imageurl = imageRef.current.value;
          const categoery = categoeryRef.current.value;
          if (imageurl === "") {
               message("warning", "Please enter valid url");
               return;
          }
          if (categoery === "select") {
               message("warning", "Please select categoery");
               return;
          }
            console.log(categoery);
          fetch("http://localhost:3001/api/saveimage", {
               method: "POST",
               body: JSON.stringify({
                    imageurl: imageurl,
                    categoery: categoery,
               }),
               headers: {
                    "Content-type": "application/json; charset=UTF-8",
               },
          })
               .then((res) => res.json())
               .then((data) => {
                    message(data.type, data.message);
                    if (data.status) {
                         imageRef.current.value ="";
                         categoeryRef.current.value ="select";
                    }
               })
               .catch((err) => {
                    console.log(err.message);
               });
     };
     return (
          <div className="Auth-form-container">
               <form className="Auth-form" onSubmit={handleSubmit}>
                    <div className="Auth-form-content">
                         <h3 className="Auth-form-title">Image Upload</h3>
                         <div className="form-group mt-3">
                              <label>Image Url</label>
                              <input
                                   type="text"
                                   className="form-control mt-1"
                                   placeholder="Enter image url"
                                   ref={imageRef}
                              />
                         </div>
                         <div className="form-group mt-3">
                              <label>Categoery</label>
                              <select
                                   className="form-control mt-1"
                                   ref={categoeryRef}
                              >
                                   <option value="select">Select</option>
                                   <option value="nature">Nature</option>
                                   <option value="art">Art</option>
                                   <option value="place">Place</option>
                                   <option value="texture">Texture</option>
                                   <option value="architecture">
                                        Architecture
                                   </option>
                              </select>
                         </div>
                         <div className="d-grid gap-2 mt-3">
                              <button type="submit" className="btn btn-primary">
                                   Upload
                              </button>
                         </div>
                    </div>
               </form>
          </div>
     );
};

export default ImageForm;
