import React from "react";

import { IoIosArrowRoundForward } from "react-icons/io";
import { useAllCollections } from "@/context/CollectionContext";
import { Link, useNavigate } from "react-router-dom";

function AllCollections() {
  const { allCollections } = useAllCollections();

  return (
    <div className=" md:w-[75vw] mx-2 md:mx-auto flex flex-col assistant gap-12 pt-7 md:pt-10  ">
      <p className=" text-4xl">Collections</p>
      <div className=" flex flex-col gap-4">
        <div className=" grid grid-cols-2  md:grid-cols-2 lg:grid-cols-3  bg-orange-300 gap-2 gap-y-4">
          {allCollections.map((item) => (
            <Link to={`/all-collections/${item.name}`}>
              <div className="   flex flex-col group  hover:cursor-pointer ">
                <div className="lg:h-[370px] md:h-[350px] h-[200px] w-full ">
                  <img
                    className="  h-full   object-fit  w-full"
                    src={item.image[0]}
                    alt=""
                  />
                </div>

                <div className=" py-2 flex flex-row items-center gap-2 ">
                  <p>{item.name}</p>
                  <div className=" scale-125 group-hover:scale-x-[2]  md:scale-150 md:group-hover:scale-x-[2] duration-300">
                    <IoIosArrowRoundForward />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllCollections;
