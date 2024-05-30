import React from "react";
import home from "../assets/images/home.jpg";
import newArrival from "../assets/images/NewArrival.jpg";
import rename from "../assets/images/rename.jpg";
import { IoIosArrowRoundForward } from "react-icons/io";
function Collectionhome() {
  const items = [
    {
      name: "Celeb`s Favourite ",
      price: "3000",
      images: [home],
    },
    {
      name: "Occasions",
      price: "3000",
      images: [newArrival],
    },
    {
      name: "Peach floral Saree ",
      price: "3000",
      images: [rename],
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

  const itemsToShow = items.slice(0, 4);

  return (
    <div className=" flex flex-col md:w-[80vw] md:mx-auto w-full px-4  pt-10 ">
      <p className=" md:text-4xl assistant text-3xl pb-4">Collections</p>

      <div className=" grid md:grid-cols-4 md:grid-rows-1 grid-cols-2 grid-row-2  gap-3  w-full pb-5   ">
        {itemsToShow.map((item) => (
          <div className="   group">
            <img
              className=" object-fit md:h-[320px] md:max-h-[320px] h-[250px] w-full"
              src={item.images}
              alt=""
            />
            <div className=" py-2 flex flex-row items-center gap-2 ">
              <p>{item.name}</p>
              <div className=" scale-125 group-hover:scale-x-[2]  md:scale-150 md:group-hover:scale-x-[2] duration-300">
                <IoIosArrowRoundForward />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center items-center h-[60px]  py-9 ">
        <button className=" border border-black px-7 py-3 duration-300 text-sm bg-black text-white hover:px-8 hover:py-4">
          VIEW ALL
        </button>
      </div>
    </div>
  );
}

export default Collectionhome;
