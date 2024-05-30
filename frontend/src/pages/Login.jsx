import axios from "axios";
import React, { useEffect } from "react";

function Login() {
  useEffect(() => {
    const res = axios
      .get("/api/products")
      .then((response) => console.log(response));
  }, []);
  return (
    <form>
      <div className="  md:h-[400px] md:w-[450px] mx-auto mt-20 h-[320px] w-[350px] flex flex-col p-4 gap-4 border-[1px] rounded-md pb-">
        <p className=" w-full text-center text-3xl md:text-4xl md:py-5 ">
          SubtleNaari
        </p>
        <div className=" flex flex-col gap-2">
          <p className=" text-2xl ">Login</p>
          <p className="text-gray-700">
            Enter your email and we'll send you a login code
          </p>
        </div>
        <div className=" flex flex-col gap-1 md:pt-3">
          <label className="text-gray-700">Email</label>
          <input
            className=" rounded-sm py-2 border-[1px] border-black "
            type="email"
            required
          />
        </div>

        <button className=" bg-black text-white py-2 rounded-sm">
          Continue
        </button>
      </div>
    </form>
  );
}

export default Login;
