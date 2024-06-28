import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

// Making context
export const ItemData = createContext();

// Setting context in a function
export const useItemData = () => useContext(ItemData);

export const ItemStorage = ({ children }) => {
  const [item, setItem] = useState([]);

  // Getting item
  const getItem = async () => {
    try {
      const response = await axios.get("http://localhost:5236/getproduct");
      setItem(response.data);
    } catch (error) {
      console.error("Error fetching item list:", error);
    }
  };

  useEffect(() => {
    getItem();
  }, []);

  return (
    <ItemData.Provider value={{ item, setItem }}>{children}</ItemData.Provider>
  );
};
