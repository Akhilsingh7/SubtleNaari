import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import AllProducts from "./pages/AllProducts";
import AllCollections from "./pages/AllCollections";
import ContactUs from "./pages/ContactUs";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import SingleCollection from "./pages/SingleCollection";
import Login from "./pages/Login";
import SingleProduct from "./pages/SingleProduct";

function App() {
  const [open, setOpen] = useState(false);

  const toggleWindow = () => {
    // const scrollY = window.scrollY;

    setOpen((prev) => !prev);
  };
  return (
    <div
      className={`${
        open ? "overflow-hidden h-screen" : "overflow-y-auto h-full"
      }`}
    >
      <div className=" h-[84px] w-full"></div>
      <Navbar open={open} setOpen={setOpen} toggleWindow={toggleWindow} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/all-collections" element={<AllCollections />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route
          path="/all-collections/:collectionname"
          element={<SingleCollection />}
        />
        <Route path="/login" element={<Login />} />

        <Route path="/all-products/:productName" element={<SingleProduct />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
