import React, { createContext, useState, useContext, useEffect } from "react";
import home from "../assets/images/home.jpg";
import Arrival from "../assets/images/NewArrival.jpg";

const AllProductContext = createContext();

export const AllProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  //get all products through api call
  const getAllProducts = () => {
    const items = [
      {
        name: "Peach Floral Anarkali",
        price: "3000",
        images: [home],
        sizesAvailable: ["S", "XS", "M", "L", "XXL"],
        category: "ANARKALI",
        newArrival: true,
      },
      {
        name: "Peach Floral Bandhani Saree",
        price: "3000",
        images: [Arrival],
        sizesAvailable: ["S", "XS", "M", "L", "XXL"],
        category: "BANDHANI",
        newArrival: true,
      },
      {
        name: "Peach Floral Celebs Favorite Saree",
        price: "3000",
        images: [Arrival],
        sizesAvailable: ["S", "XS", "M", "L", "XXL"],
        category: "CELEBS FAVORITE",
        newArrival: false,
      },
      {
        name: "Peach Floral Coord Set 1",
        price: "3000",
        images: [Arrival],
        sizesAvailable: ["S", "XS", "M", "L", "XXL"],
        category: "COORD SET",
        newArrival: false,
      },
      {
        name: "Peach Floral Coord Set 2",
        price: "3000",
        images: [Arrival],
        sizesAvailable: ["S", "XS", "M", "L", "XXL"],
        category: "COORD SET",
        newArrival: false,
      },
      {
        name: "Peach Floral Bandhani Saree 2",
        price: "3000",
        images: [Arrival],
        sizesAvailable: ["S", "XS", "M", "L", "XXL"],
        category: "BANDHANI",
        newArrival: true,
      },
      {
        name: "Peach Floral Anarkali 2",
        price: "3000",
        images: [Arrival],
        sizesAvailable: ["S", "XS", "M", "L", "XXL"],
        category: "ANARKALI",
        newArrival: true,
      },
      {
        name: "Peach Floral Bandhani Saree 3",
        price: "3000",
        images: [Arrival],
        sizesAvailable: ["S", "XS", "M", "L", "XXL"],
        category: "BANDHANI",
      },
    ];

    setProducts(items);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <AllProductContext.Provider value={{ products }}>
      {children}
    </AllProductContext.Provider>
  );
};
export const useAllProducts = () => {
  return useContext(AllProductContext);
};
