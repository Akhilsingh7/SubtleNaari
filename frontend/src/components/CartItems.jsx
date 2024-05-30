import React, { useState } from "react";
import { HiOutlineMinus } from "react-icons/hi2";
import { PiPlus } from "react-icons/pi";
import { RiDeleteBinLine } from "react-icons/ri";

const CartItems = ({
  item,
  allitems,
  setItems,
  cartsum,
  setCartSum,
  setFinalCart,
}) => {
  const [quantity, setQuantity] = useState(1);

  function removeItem(id, price) {
    if (quantity >= 2) {
      setQuantity(quantity - 1);
      setCartSum((prev) => prev - Number(price));
    } else {
      const updatedItems = allitems.filter((item) => item.id != id);
      setItems(updatedItems);
    }
  }

  function addItem(price) {
    setQuantity(quantity + 1);
    setCartSum((prev) => prev + Number(price));
  }

  function CartSummary() {
    const obj = {
      ...item,
      quantity,
    };
    setFinalCart((prev) => [...prev, obj]);
  }
  return (
    <>
      {quantity > 0 && (
        <div className=" flex flex-row gap-44  ">
          <div className=" flex flex-row justify-start   md:w-[40%]  gap-4  md:gap-8 ">
            <div className=" w-[100px]  h-[150px]  ">
              <img className=" w-full h-full " src={item.images} alt="" />
            </div>
            <div className=" flex flex-col gap-[2px]   items-start justify-start">
              <p>{item.name} </p>
              <p className="text-gray-500">Rs. {item.price}</p>
              <p>
                Size.
                <span className=" text-xl ">{item.size}</span>
              </p>
              <div className=" md:hidden pt-2 flex flex-row md:gap-6 gap-2 justify-center   h-fit items-center ">
                <div className=" w-[100px] h-[40px] md:w-[120px] md:h-[40px]  flex flex-row justify-between items-center p-4 border-black border-[1px] ">
                  <div onClick={() => removeItem(item.id, item.price)}>
                    <HiOutlineMinus />
                  </div>
                  <div>{quantity}</div>
                  <div onClick={() => addItem(item.price)}>
                    <PiPlus />
                  </div>
                </div>
                <div className=" text-lg">
                  <RiDeleteBinLine />
                </div>
              </div>
            </div>
          </div>

          <div className=" hidden md:flex flex-row gap-6 justify-start   h-fit items-center  ">
            <div className=" w-[150px] h-[50px] flex flex-row justify-between items-center p-4 border-black border-[1px]  ">
              <div onClick={() => removeItem(item.id, item.price)}>
                <HiOutlineMinus />
              </div>
              <div>{quantity}</div>
              <div onClick={() => addItem(item.price)}>
                <PiPlus />
              </div>
            </div>
            <div className=" text-lg">
              <RiDeleteBinLine />
            </div>
          </div>

          <div className=" hidden md:block  w-[72px]">
            Rs. {quantity * item.price}
          </div>
        </div>
      )}
    </>
  );
};

export default CartItems;
