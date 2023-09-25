import React, { useEffect, useState } from "react";
import styles from "./home.module.css";
import message from "../config/Notification";

const Home = () => {
     const [images, setImages] = useState([]);
     const [categoery, setCategoery] = useState("all");
     useEffect(() => {
          const fetchData = async () => {
               await fetch(`http://localhost:3001/api/getimages/${categoery}`)
                    .then((res) => res.json())
                    .then((data) => {
                         if (data.status) {
                              setImages(data.images);
                              message(data.type, data.message);
                         } else {
                          setImages([]);
                              message(data.type, data.message);
                         }
                    })
                    .catch((err) => {
                         message("error", "Something went wrong");
                    });
          };
          fetchData();
     }, [categoery]);
     console.log(images);
     return (
          <div>
               <h1>Photo Gallery </h1>
               <div className="categoery-buttons">
                    <button onClick={()=>setCategoery("all")}
                    style={{backgroundColor:categoery==="all" ?"#0077b6":"#00296b"}}
                    >All</button>
                    <button onClick={()=>setCategoery("nature")}
                    style={{backgroundColor:categoery==="nature" ?"#0077b6":"#00296b"}}
                    >Nature</button>
                    <button onClick={()=>setCategoery("art")}
                    style={{backgroundColor:categoery==="art" ?"#0077b6":"#00296b"}}
                    >Art</button>
                    <button onClick={()=>setCategoery("place")}
                    style={{backgroundColor:categoery==="place" ?"#0077b6":"#00296b"}}
                    >Place</button>
                    <button onClick={()=>setCategoery("architecture")}
                    style={{backgroundColor:categoery==="architecture" ?"#0077b6":"#00296b"}}
                    >Architecture</button>
                    <button onClick={()=>setCategoery("texture")}
                     style={{backgroundColor:categoery==="texture" ?"#0077b6":"#00296b"}}
                    >Texture</button>
                    
               </div>
               {images.length > 0 ? (
                    <div className={styles.imageList}>
                         {images.map((image, i) => (
                              <div key={i} className={styles.image}>
                                   <img
                                        src={image.imageurl}
                                        alt={image.imageurl}
                                   />
                              </div>
                         ))}
                    </div>
               ) : (
                    <h1>No Image found</h1>
               )}
          </div>
     );
};

export default Home;
