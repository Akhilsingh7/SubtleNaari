import React from "react";
import home from "../assets/images/home.jpg";
import newArrival from "../assets/images/NewArrival.jpg";

import NewArrival from "@/components/NewArrival";

function Home() {
  const items = [
    {
      name: "Peach floral Saree ",
      price: "3000",
      images: [home],
    },
    {
      name: "Peach floral Saree ",
      price: "3000",
      images: [newArrival],
    },
    {
      name: "Peach floral Saree ",
      price: "3000",
      images: [newArrival],
    },
    {
      name: "Peach floral Saree ",
      price: "3000",
      images: [newArrival],
    },
    {
      name: "Peach floral Saree ",
      price: "3000",
      images: [newArrival],
    },
    {
      name: "Peach floral Saree ",
      price: "3000",
      images: [newArrival],
    },
    {
      name: "Peach floral Saree ",
      price: "3000",
      images: [newArrival],
    },
  ];
  return (
    <div className=" pb-2">
      <div className=" overflow-hidden relative h-[50%] ">
        <img
          className=" object-cover  w-full h-[70vh]"
          src={home}
          alt=""
          //   style={{ objectFit: "cover", height: "70vh", width: "100%" }}
        />
        <div className=" flex flex-col items-center justify-center gap-4 absolute bottom-10  left-1/2 transform -translate-x-1/2 text-white ">
          <p className=" text-2xl text-center whitespace-nowrap">
            SHOP SPRING-SUMMER 2024
          </p>

          <p className=" sm:whitespace-nowrap text-center text-xl">
            Click on the button below to shop our new collection now
          </p>
          <button className="  hover:border-4 duration-700 border w-[120px] h-[50px] border-white ">
            Shop now
          </button>
        </div>
      </div>

      <p className=" text-center text-4xl pt-10 pb-5  font-serif">
        NEW ARRIVALS
      </p>
      <NewArrival items={items} />
    </div>
  );
}

export default Home;
