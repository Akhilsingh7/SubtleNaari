import { useAllProducts } from "@/context/AllProductContext";
import React, { useEffect, useRef, useState } from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { SlArrowLeftCircle } from "react-icons/sl";

function NewArrival() {
  const containerRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        setShowLeftButton(containerRef.current.scrollLeft > 0);

        setShowRightButton(
          containerRef.current.scrollLeft <
            containerRef.current.scrollWidth - containerRef.current.offsetWidth
        );
      } else {
        setShowRightButton(true);
      }
    };

    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 350; // Adjust the scroll distance as needed
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 350; // Adjust the scroll distance as needed
    }
  };

  const { products } = useAllProducts();
  const items = products.filter((item) => item.newArrival === true);

  return (
    <div className="  overflow-x-hidden px-14 w-[100vw] relative  ">
      <div
        className=" flex flex-row gap-10 md:gap-20 overflow-x-auto py-4   w-full   "
        ref={containerRef}
        style={{ scrollBehavior: "smooth" }}
      >
        <div className=" absolute top-1/2 transform -translate-y-1/2 left-3 text-3xl ">
          {showLeftButton && <SlArrowLeftCircle onClick={scrollLeft} />}
        </div>
        <div className=" absolute top-1/2 transform -translate-y-1/2 right-4 text-3xl ">
          {showRightButton && <BsArrowRightCircle onClick={scrollRight} />}
        </div>
        {items.map((item) => (
          <div className=" w-[200px] min-w-[200px] h-[350px] min-h-[350px] md:w-[270px] md:min-w-[270px] md:h-[450px] md:min-h-[450px] overflow-hidden group   hover:cursor-pointer">
            <img
              className="object-cover h-[85%] max-h-[85%] md:h-[90%] w-full"
              src={item.images[0]}
              alt=""
            />
            <div className=" flex  flex-col gap-2justify-center items-center w-full pt-2  ">
              <div className="relative  ">
                <p>{item.name}</p>
                <div className=" bg-black  h-[1px] absolute bottom-[3px] hidden group-hover:block  w-full"></div>
              </div>
              {/* <p className=" text-center p-1 ">{item.name}</p> */}

              <p className=" text-center"> {item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center items-center h-[60px]  ">
        <button className=" border border-black px-7 py-3 duration-300 text-sm bg-black text-white hover:px-8 hover:py-4">
          VIEW ALL
        </button>
      </div>
    </div>
  );
}

export default NewArrival;
