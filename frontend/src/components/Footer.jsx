import React from "react";

function Footer() {
  return (
    <div className=" mt-10 md:mt-20  min-h-[400px] w-full flex flex-row justify-around gap-28 items-start py-10 flex-wrap p-3 border-t-[1px] gap-y-6   ">
      <div className=" flex flex-col items-start gap-4  w-[300px] max-h-[350px] min-h-fit ">
        <p>NEWS LETTER</p>
        <div className=" flex flex-col items-start gap-3  text-gray-500">
          <p>Get previews and deals for upcoming collections by SubtleNaari.</p>
          <input
            type="text"
            name=""
            id=""
            placeholder="Email"
            className=" px-5 pr-20 py-3 border border-slate-200"
          />
          <button className=" bg-black text-white px-6 py-2">SUBSCRIBE</button>
        </div>
      </div>
      <div className=" flex flex-col gap-4  w-[300px] max-h-[350px] min-h-fit items-center">
        <p className=" pr-9">FOOTER MENU</p>
        <div className=" flex flex-col gap-2 ">
          <p className=" text-gray-500 hover:text-black">
            Customization Policy
          </p>
          <p className=" text-gray-500 hover:text-black">Shipping & Delivery</p>
          <p className=" text-gray-500 hover:text-black">Return Policy</p>
          <p className=" text-gray-500 hover:text-black">FAQs</p>
          <p className=" text-gray-500 hover:text-black">Contact Us</p>
          <p className=" text-gray-500 hover:text-black">About Us</p>
          <p className=" text-gray-500 hover:text-black">Privacy Policy</p>
          <p className=" text-gray-500 hover:text-black">Terms & Conditions</p>
          <p className=" text-gray-500 hover:text-black">Terms of Service</p>
        </div>
      </div>
      <div className=" flex flex-col gap-5 w-[300px]   md:w-[400px]  max-h-[350px] min-h-fit ">
        <p>ABOUT</p>
        <p className="text-gray-500">
          Subtle Naari presents to you a very chic way to take over the world
          and look fabulous while doing it!
        </p>
        <div className=" flex flex-col gap-4">
          <p>Contact Us:</p>
          <p className=" text-gray-500">Mail - subtlenaari@gmail.com</p>
          <p className=" text-gray-500">WhatsApp - +91 9636423075</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
