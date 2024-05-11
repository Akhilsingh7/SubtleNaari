import React, { useEffect, useRef, useState } from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { SlArrowLeftCircle } from "react-icons/sl";

function NewArrival({ items }) {
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
      containerRef.current.scrollLeft -= 400; // Adjust the scroll distance as needed
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 400; // Adjust the scroll distance as needed
    }
  };

  return (
    <div className="  overflow-x-hidden px-14 w-[100vw] relative  ">
      <div
        className=" flex flex-row gap-20 overflow-x-auto py-4   w-full   "
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
          <div className="w-[300px] min-w-[270px] h-[450px] min-h-[450px] overflow-hidden">
            <img
              className="object-cover h-[90%] w-full"
              src={item.images[0]}
              alt=""
            />
            <div className=" h-full w-full">
              <p className=" text-center">{item.name}</p>
              <p className=" text-center"> {item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center items-center ">
        <button className=" border border-black px-3 py-2 rounded-sm hover:scale-110 duration-700">
          VIEW ALL
        </button>
      </div>
    </div>
  );
}

export default NewArrival;
