import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import { AiOutlineUser } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { RiMenuFill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar({ setOpen, open, toggleWindow }) {
  return (
    <div className=" h-[85px] w-full flex items-center justify-around  ">
      <div className=" h-[80%] flex items-center md:justify-around justify-between gap-12 ">
        <div className=" text-2xl md:hidden  h-[80%]  flex justify-center items-center">
          <button onClick={toggleWindow}>
            {open ? <RxCross1 /> : <RiMenuFill />}
          </button>
        </div>

        <div
          className={
            open
              ? "absolute top-[85px] w-[80vw] left-0  bg-black transition-transform duration-300 translate-y-0 z-10  "
              : " hidden "
          }
          style={{ height: "calc(100vh - 85px)" }}
        ></div>

        <div className="   h-[80%] justify-center items-center flex font-sans text-gray-700 hover:text-black duration-200">
          <p className=" text-3xl md:text-4xl hover:cursor-pointer">
            SubtleNaari
          </p>
        </div>
        <div className="    h-[80%] md:flex items-center justify-around hidden gap-4 ">
          <div className="   h-[80%] text-m flex justify-center items-center group duration-300 text-gray-700 ">
            <div className="relative w-full flex justify-center items-center hover:cursor-pointer ">
              <p className=" group-hover:text-black">Home</p>
              <div className=" bg-black  h-[1px] absolute bottom-[3px] hidden group-hover:block w-full"></div>
            </div>
          </div>
          <div className="  h-[80%] group flex flex-col justify-center items-center text-gray-700 ">
            <div className="relative w-full flex justify-center items-center hover:cursor-pointer  ">
              <p className=" group-hover:text-black">All Products</p>
              <div className=" bg-black  h-[1px] w-full absolute bottom-[3px] hidden group-hover:block"></div>
            </div>
          </div>
          <div className="   h-[80%] group flex flex-col justify-center items-center  text-gray-700">
            <div className="relative w-full flex justify-center items-center hover:cursor-pointer ">
              <p className=" group-hover:text-black">All Collections</p>
              <div className=" bg-black w-full h-[1px] absolute bottom-[3px] hidden group-hover:block"></div>
            </div>
          </div>
          <div className="   h-[80%] group flex flex-col justify-center items-center text-gray-700">
            <div className="relative w-full flex justify-center items-center  hover:cursor-pointer">
              <p className=" group-hover:text-black">Contact Us</p>
              <div className=" bg-black  h-[1px] absolute bottom-[3px] hidden group-hover:block w-full"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="  h-[80%] flex justify-around items-center gap-4">
        <div className="w-[30px]  hidden md:flex justify-center items-center text-2xl ">
          <AiOutlineUser className=" hover:cursor-pointer hover:text-3xl duration-700" />
        </div>
        <div className=" w-[30px]  h-[80%] flex justify-center items-center text-2xl">
          <GoSearch className=" hover:cursor-pointer hover:text-3xl duration-700" />
        </div>
        {/* <div className=" bg-blue-500 w-[20%] h-[80%] flex justify-center items-center text-2xl">
          <IoMdHeartEmpty className=" hover:cursor-pointer hover:text-3xl duration-700" />
        </div> */}
        <div className=" w-[30px] h-[80%] flex justify-center items-center text-2xl">
          <LiaShoppingBagSolid className=" hover:cursor-pointer hover:text-3xl duration-700" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
