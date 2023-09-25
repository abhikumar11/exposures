import React from "react";

const Products = ({ product }) => {
     console.log(product);
     return (
          
          <div>
               <h2 class="text-center">Product List</h2>
               <table class="table table-bordered">
                    <thead>
                         <tr>
                              <th>Id</th>
                              <th>Product Name</th>
                              <th>Description</th>
                              <th>Price</th>
                              <th>Image</th>
                              <th>Action</th>
                         </tr>
                    </thead>
                    <tbody>
                         {product.map((product) => (
                              <tr>
                                   <th scope="row">{product.productid}</th>
                                   <td>{product.productname}</td>
                                   <td>{product.productdesc}</td>
                                   <td>
                                        {Number.parseFloat(
                                             product.productprice
                                        )}
                                   </td>
                                   <td>
                                        <img
                                             src={product.productimage}
                                             width="80px"
                                             alt="Product"
                                        />
                                   </td>
                                   <td>
                                        <button
                                             href="#"
                                             className="btn btn-warning text-white"
                                        >
                                             Edit
                                        </button>
                                        <button class="btn btn-danger text-white">
                                             Delete
                                        </button>
                                   </td>
                              </tr>
                         ))}
                    </tbody>
               </table>
               <h1 class="text-center">No Product to show!</h1>
          </div>
     );
};

export default Products;
