import React from "react";
import { useAllProducts } from "@/context/AllProductContext";

function BrowseAllProducts() {
  const { products } = useAllProducts();

  const itemsToShow = products.slice(0, 8);

  return (
    <div className=" pt-10">
      <p className=" text-3xl pl-4  assistant pb-2 ">Browse All Products</p>
      <div className="  grid grid-cols-2  grid-row-4 md:grid-cols-4 md:grid-rows-2 gap-3 p-4 gap-y-6 ">
        {itemsToShow.map((item) => (
          <div className="   flex flex-col group  hover:cursor-pointer ">
            <div className="lg:h-[450px] md:h-[400px] h-[300px] w-full ">
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
        ))}
      </div>
      <div className="w-full flex justify-center items-center h-[60px] py-12 ">
        <button className=" border border-black px-7 py-3 duration-300 text-sm bg-black text-white hover:px-8 hover:py-4">
          VIEW ALL
        </button>
      </div>
    </div>
  );
}

export default BrowseAllProducts;
