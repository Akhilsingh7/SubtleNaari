import React, { useEffect, useState } from "react";
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
import { Link, useLocation, useNavigate } from "react-router-dom";
import Mobilenav from "./Mobilenav";

function Navbar({ setOpen, open, toggleWindow }) {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const location = useLocation();
  const [searchopen, setSearchOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    //   {searchopen ? (
    //     <div className=" w-full h-[85px] bg-red-200 fixed top-0 left-0 right-0 z-10">
    //       {" "}
    //       <div></div>
    //       <div
    //         className=" absolute w-full top-[85px]  opacity-70 bg-black "
    //         style={{
    //           height: "calc(100vh - 85px)",
    //         }}
    //       ></div>
    //     </div>
    //   ) : (
    <div
      className={`h-[85px] border-b-[1px] w-full flex items-center justify-around fixed -top-[1px] left-0 right-0 z-10 bg-white assistant transition-transform duration-300 ${
        visible ? "transform translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className=" h-[80%] flex items-center md:justify-around justify-between gap-12 ">
        <div className=" text-2xl md:hidden  h-[80%]  flex justify-center items-center">
          <button onClick={toggleWindow}>
            {open ? <RxCross1 /> : <RiMenuFill />}
          </button>
        </div>

        <div
          className={
            open
              ? "fixed top-[85px] left-0 w-[80vw] bg-white z-10 duration-300 transition-transform transform translate-x-0 pt-10 assistants"
              : "fixed top-[85px] left-0 w-[80vw] bg-white z-10 duration-300 transition-transform transform -translate-x-full pt-10"
          }
          style={{
            height: "calc(100vh - 84px)",
          }}
        >
          <Mobilenav toggleWindow={toggleWindow} />
        </div>

        <Link to="/">
          {" "}
          <div className="   h-[80%] justify-center items-center flex  text-gray-700 hover:text-black duration-200">
            <p className=" text-3xl md:text-4xl hover:cursor-pointer">
              SubtleNaari
            </p>
          </div>
        </Link>

        <div className="    h-[80%] md:flex items-center justify-around hidden gap-8 ">
          <div className="   h-[80%] text-m flex justify-center items-center group duration-300 text-gray-700 ">
            <Link to="/">
              <div className="relative w-full flex justify-center items-center hover:cursor-pointer ">
                <p
                  className={` group-hover:text-black ${
                    location.pathname === "/" ? "text-black" : " text-gray-700"
                  }`}
                >
                  Home
                </p>
                <div className=" bg-black  h-[1px] absolute bottom-[3px] hidden group-hover:block w-full"></div>
                <div
                  className={`bg-black  h-[1px] absolute bottom-[3px] ${
                    location.pathname === "/" ? "block" : "hidden"
                  }  w-full `}
                ></div>
              </div>
            </Link>
          </div>
          <div className="  h-[80%] group flex flex-col justify-center items-center text-gray-700 ">
            <Link to="/all-products">
              <div className="relative w-full flex justify-center items-center hover:cursor-pointer  ">
                <p
                  className={` group-hover:text-black ${
                    location.pathname === "/all-products"
                      ? "text-black"
                      : " text-gray-700"
                  }`}
                >
                  All Products
                </p>
                <div className=" bg-black  h-[1px] w-full absolute bottom-[3px] hidden group-hover:block"></div>
                <div
                  className={`bg-black  h-[1px] absolute bottom-[3px] ${
                    location.pathname === "/all-products" ? "block" : "hidden"
                  }  w-full `}
                ></div>
              </div>
            </Link>
          </div>
          <div className="   h-[80%] group flex flex-col justify-center items-center  text-gray-700">
            <Link to="/all-collections">
              <div className="relative w-full flex justify-center items-center hover:cursor-pointer ">
                <p
                  className={` group-hover:text-black ${
                    location.pathname === "/all-collections"
                      ? "text-black"
                      : " text-gray-700"
                  }`}
                >
                  All Collections
                </p>
                <div className=" bg-black w-full h-[1px] absolute bottom-[3px] hidden group-hover:block"></div>
                <div
                  className={`bg-black  h-[1px] absolute bottom-[3px] ${
                    location.pathname === "/all-collections"
                      ? "block"
                      : "hidden"
                  }  w-full `}
                ></div>
              </div>
            </Link>
          </div>
          <div className="   h-[80%] group flex flex-col justify-center items-center text-gray-700">
            <Link to="/contact">
              <div className="relative w-full flex justify-center items-center  hover:cursor-pointer">
                <p
                  className={` group-hover:text-black ${
                    location.pathname === "/contact"
                      ? "text-black"
                      : " text-gray-700"
                  }`}
                >
                  Contact Us
                </p>
                <div className="bg-black  h-[1px] absolute bottom-[3px] hidden group-hover:block w-full "></div>
                <div
                  className={`bg-black  h-[1px] absolute bottom-[3px] ${
                    location.pathname === "/contact" ? "block" : "hidden"
                  }  w-full `}
                ></div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="  h-[80%] flex justify-around items-center gap-4">
        <Link to="/login">
          <div className="w-[30px]  hidden md:flex justify-center items-center text-2xl ">
            <AiOutlineUser className=" hover:cursor-pointer hover:text-3xl duration-700" />
          </div>
        </Link>
        <div className=" w-[30px]  h-[80%] flex justify-center items-center text-2xl">
          <button>
            <GoSearch className=" hover:cursor-pointer hover:text-3xl duration-700" />
          </button>
        </div>
        {/* <div className=" bg-blue-500 w-[20%] h-[80%] flex justify-center items-center text-2xl">
          <IoMdHeartEmpty className=" hover:cursor-pointer hover:text-3xl duration-700" />
        </div> */}
        <Link to="/cart">
          <div className=" relative w-[30px] h-[80%] flex justify-center items-center text-2xl">
            <LiaShoppingBagSolid className=" hover:cursor-pointer hover:text-3xl duration-700" />
            <div className=" text-white absolute top-4 left-3 rounded-full  w-[15px] h-[15px] bg-black flex justify-center items-center ">
              <span className=" text-sm text-white">3</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
