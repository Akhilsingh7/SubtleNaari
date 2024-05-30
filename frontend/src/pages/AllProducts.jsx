import React from "react";

import { useAllProducts } from "@/context/AllProductContext";
import { Link } from "react-router-dom";

function AllProducts() {
  const { products } = useAllProducts();

  return (
    <div className=" md:w-[80vw] mx-2 md:mx-auto flex flex-col assistant gap-12 pt-7 md:pt-10 ">
      <p className=" text-4xl">Products</p>
      <div className=" flex flex-col gap-4">
        <div className=" w-full h-[50px] bg-gray-500"></div>
        <div className=" grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4  bg-orange-300 gap-2 gap-y-4">
          {products.map((item) => (
            <Link to={`/all-products/${item.name}`}>
              <div className="   flex flex-col group  hover:cursor-pointer ">
                <div className="lg:h-[400px] md:h-[350px] h-[250px] w-full ">
                  <img
                    className="  h-full   object-fit  w-full"
                    src={item.images[0]}
                    alt=""
                  />
                </div>

                <div className="  flex flex-col gap-1   pt-2   ">
                  <div className="relative w-full   ">
                    <div className="relative w-fit ">
                      <p>{item.name}</p>
                      <div className=" bg-black  h-[1px] absolute bottom-[3px] hidden group-hover:block  w-full"></div>
                    </div>
                  </div>
                  <p>Rs. {item.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className=" w-full h-[50px] bg-gray-400"></div>
      </div>
    </div>
  );
}

export default AllProducts;
