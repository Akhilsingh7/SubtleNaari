import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Mobilenav({ toggleWindow }) {
  const navigate = useNavigate();
  function handleContact(e) {
    e.preventDefault();
    toggleWindow();
    navigate("/contact");
    console.log("clicked");
  }
  return (
    <div className=" w-full h-[40%] mx-auto flex flex-col  items-start gap-3 ">
      <Link
        className=" w-full"
        to="/"
        onClick={(e) => {
          toggleWindow();
          navigate("/");
        }}
      >
        <p
          className={`${
            location.pathname === "/" ? "bg-gray-100 " : "bg-white"
          }w-full pl-8 p-2 text-xl hover:bg-gray-100 `}
        >
          Home
        </p>
      </Link>
      <Link
        to="/all-products"
        className="w-full"
        onClick={(e) => {
          toggleWindow();
          navigate("/all-products");
        }}
      >
        <p
          className={`${
            location.pathname === "/all-products" ? "bg-gray-100" : "bg-white"
          } w-full pl-8 p-2 text-xl hover:bg-gray-100  `}
        >
          All Products
        </p>
      </Link>
      <Link
        to="/all-collections"
        className="w-full"
        onClick={(e) => {
          toggleWindow();
          navigate("/all-collections");
        }}
      >
        {" "}
        <p
          className={`${
            location.pathname === "/all-collections"
              ? "bg-gray-100"
              : "bg-white"
          } w-full pl-8 p-2 text-xl hover:bg-gray-100`}
        >
          All Collections
        </p>
      </Link>

      <Link
        to="/contact"
        className="w-full"
        onClick={(e) => {
          toggleWindow();
          navigate("/contact");
        }}
      >
        {" "}
        <p
          className={`${
            location.pathname === "/contact" ? "bg-gray-100" : "bg-white"
          } w-full pl-8 p-2 text-xl hover:bg-gray-100`}
        >
          All Collections
        </p>
      </Link>
    </div>
  );
}

export default Mobilenav;
