import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

// Making context
export const ItemData = createContext();

// Setting context in a function
export const useItemData = () => useContext(ItemData);

export const ItemStorage = ({ children }) => {
  const [item, setItem] = useState([]);
  const [cart, setCart] = useState([]);

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

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <ItemData.Provider value={{ item, cart, addToCart, removeFromCart }}>
      {children}
    </ItemData.Provider>
  );
};
