import { useAllProducts } from "@/context/AllProductContext";
import React from "react";
import { useParams } from "react-router-dom";
import { HiOutlineMinus } from "react-icons/hi2";
import { PiPlus } from "react-icons/pi";

function SingleProduct() {
  const { productName } = useParams();
  const { products } = useAllProducts();

  const product = products.filter(
    (product) => product.name.trim() === productName.trim()
  );

  return (
    <div className=" pt-20 w-full flex flex-row">
      <div className=" w-1/2 h-[300px]">
        <img
          src={product[0].images}
          alt=""
          className=" object-contain h-full w-full"
        />
      </div>
      <div>
        <p>{product[0].name}</p>
        <p>{product[0].price}</p>
        <p>{product[0].category}</p>
        <div className=" flex flex-row gap-2">
          <button className=" border-[2px] border-black px-4 rounded-md">
            S
          </button>
          <button className=" border-[2px] border-black px-4 rounded-md">
            XS
          </button>
          <button className=" border-[2px] border-black px-4 rounded-md">
            M
          </button>
          <button className=" border-[2px] border-black px-4 rounded-md">
            L
          </button>
        </div>
        <div className="  my-5 w-[120px] h-[40px]  flex flex-row justify-between items-center p-4 border-black border-[1px]">
          <div>
            <HiOutlineMinus />
          </div>
          <div>0</div>
          <div>
            <PiPlus />
          </div>
        </div>

        <div>
          <button className=" w-1/2 p-2 border-[1px] border-black">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default SingleProduct;
