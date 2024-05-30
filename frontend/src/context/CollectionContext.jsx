import React, { createContext, useContext, useEffect, useState } from "react";
import home from "../assets/images/home.jpg";
import Arrival from "../assets/images/NewArrival.jpg";

const CollectionContext = createContext();

export const CollectionProvider = ({ children }) => {
  const [allCollections, setCollections] = useState([]);

  // get all collection through api
  function getallCollections() {
    const collections = [
      {
        image: [home],
        name: "ANARKALI",
      },
      {
        image: [Arrival],
        name: "BANDHANI",
      },
      {
        image: [Arrival],
        name: "CELEBS FAVORITE",
      },
      {
        image: [home],
        name: "COORD SET",
      },
    ];
    setCollections(collections);
  }

  useEffect(() => {
    getallCollections();
  }, []);

  return (
    <CollectionContext.Provider value={{ allCollections }}>
      {children}
    </CollectionContext.Provider>
  );
};

export const useAllCollections = () => {
  return useContext(CollectionContext);
};
