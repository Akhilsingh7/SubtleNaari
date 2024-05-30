import React, { useEffect, useState } from "react";
import home from "../assets/images/home.jpg";
import Arrival from "../assets/images/NewArrival.jpg";
import rename from "../assets/images/rename.jpg";
import { Link, useNavigate } from "react-router-dom";
import CartItems from "@/components/CartItems";

function Cart() {
  const [cartsum, setCartSum] = useState(0);
  const navigate = useNavigate();
  const [finalCartItem, setFinalCart] = useState([]);

  const [items, setItems] = useState([
    {
      name: "Peach Floral Anarkali",
      price: "3000",
      images: [home],
      sizesAvailable: ["S", "XS", "M", "L", "XXL"],
      category: "ANARKALI",
      newArrival: true,
    },
    {
      name: "Peach Floral Bandhani Saree",
      price: "3000",
      images: [Arrival],
      sizesAvailable: ["S", "XS", "M", "L", "XXL"],
      category: "BANDHANI",
      newArrival: true,
    },
    {
      name: "Peach Floral Celebs Favorite Saree",
      price: "3000",
      images: [Arrival],
      sizesAvailable: ["S", "XS", "M", "L", "XXL"],
      category: "CELEBS FAVORITE",
      newArrival: false,
    },
    // {
    //   name: "Peach floral Saree ",
    //   price: "3000",
    //   images: [newArrival],
    //   size:"xs"
    // },
    // {
    //   name: "Peach floral Saree ",
    //   price: "3000",
    //   images: [newArrival],
    //   size:"xs"
    // },
    // {
    //   name: "Peach floral Saree ",
    //   price: "3000",
    //   images: [newArrival],
    // },
    // {
    //   name: "Peach floral Saree ",
    //   price: "3000",
    //   images: [newArrival],
    //   size:"xs"
    // },
    // {
    //   name: "Peach floral Saree ",
    //   price: "3000",
    //   images: [newArrival],
    //    size:"xs"
    // },
    // {
    //   name: "Peach floral Saree ",
    //   price: "3000",
    //   images: [newArrival],
    //   size:"xs"
    // },
    // {
    //   name: "Peach floral Saree ",
    //   price: "3000",
    //   images: [newArrival],
    //   size:"xs"
    // },
    // {
    //   name: "Peach floral Saree ",
    //   price: "3000",
    //   images: [newArrival],
    //   size:"xs"
    // },
    // {
    //   name: "Peach floral Saree ",
    //   price: "3000",
    //   images: [newArrival],
    //   size:"xs"
    // },
  ]);

  useEffect(() => {
    const TotalSum = items.reduce((acc, item) => acc + Number(item.price), 0);
    setCartSum(TotalSum);
  }, [items]);

  // const {ifLogin} =  CarContext();  agar login hai toh cart dikhao brn a bolo login to access cart
  //const {cartItems} =  CarContext()
  //const{setcartitems} = CarContext()

  return (
    <>
      {items.length === 0 ? (
        <div className=" w-[80vw] h-[60vh]  mx-auto flex justify-center items-center assistant">
          <div className=" w-[70%] h-[60%]  flex flex-col justify-center items-center gap-8">
            <p className=" whitespace-nowrap text-3xl md:text-5xl">
              Your cart is Empty
            </p>
            <button
              onClick={() => navigate("/all-products")}
              className=" bg-black text-white px-5 py-2"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      ) : (
        <div className=" w-[100vw] md:w-[70vw] py-8 lg:py-16  h-fit  mx-auto  assistant flex flex-col px-2 md:px-0 assistant">
          <div className=" pb-12  flex flex-row justify-between items-center">
            <p className=" text-3xl md:text-5xl">Your Cart</p>
            <Link to="/all-products">
              <div className="relative w-fit  group ">
                <p className="text-lg">Continue Shopping</p>
                <div className=" bg-black  h-[1px] absolute bottom-[3px] hidden group-hover:block  w-full"></div>
              </div>
            </Link>
          </div>
          <div className=" flex flex-row justify-between text-gray-500 pb-4">
            <p className=" w-[250px] ">Product</p>
            <p className="  hidden md:block ">Quantity</p>
            <p className="   pr-9">Total</p>
          </div>
          <div className=" w-full bg-gray-400 h-[1px]"></div>
          <div className=" flex flex-col gap-12 pt-10">
            {items.map((item) => (
              <CartItems
                // price={item.price}
                // name={item.name}
                // images={item.images}
                // size={item.size}
                item={item}
                allitems={items}
                setItems={setItems}
                cartsum={cartsum}
                setCartSum={setCartSum}
                setFinalCart={setFinalCart}
              />
            ))}
          </div>
          <div className=" w-full bg-gray-400 h-[1px] my-12"></div>
          <div className=" w-full h-[150px]  flex flex-row justify-end ">
            <div className=" w-full md:w-fit flex flex-col items-center md:items-end gap-5 ">
              <div className=" flex flex-row gap-4 text-lg">
                <p>Subtotal</p>
                <p>Rs. {cartsum}</p>
              </div>
              <div className=" text-gray-700">
                Taxes and
                <div className="relative w-fit text-gray-800  group inline-block    px-1">
                  <p>Shipping</p>
                  <div className="  bg-black  h-[1px] absolute bottom-[3px] hidden group-hover:block w-[60px]"></div>
                </div>
                calculated at checkout
              </div>

              {/* <Link to="/payment"> */}
              <button
                className=" border border-black px-7 py-3 duration-300 text-m bg-black text-white  hover:scale-y-105 w-full"
                onClick={() => callSummary()}
              >
                Check Out
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
