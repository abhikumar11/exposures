import React, { useContext } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
     
     return (
          <div>
               <nav class="navbar navbar-expand-lg bg-white sticky-top navbar-light p-3 shadow-sm">
                    <div class="container">
                         <Link to="/" class="navbar-brand" href="#">
                              <i class="fa-solid fa-shop me-2"></i>{" "}
                              <strong>Exposures</strong>
                         </Link>
                         <div class="mx-auto my-3 d-lg-none d-sm-block d-xs-block"></div>
                         <div
                              class=" collapse navbar-collapse"
                              id="navbarNavDropdown"
                         >
                            
                              <ul class="navbar-nav ms-auto ">
                                   <li class="nav-item">
                                        <Link
                                             to="/addimage"
                                             class="nav-link mx-2 text-uppercase"
                                        >
                                             <i class="fa-solid fa-circle-user me-1"></i>{" "}
                                             Add Image
                                        </Link>
                                   </li>
                              </ul>
                         </div>
                    </div>
               </nav>
          </div>
     );
};

export default Navbar;
