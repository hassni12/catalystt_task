import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productDataThunk } from "./Reducers/product";
//
const Context = React.createContext();
const ContextProvider = ({ children }) => {
  const [allData, setAllData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector(
    (products) => products.productReducer
  );


  useEffect(() => {
    dispatch(productDataThunk());
  }, []);

  useEffect(()=>{
    setAllData(data);
  },[data])

  const toggleFavorite = (id) => {
    console.log(id)
    const updatedArr = allData.map((photo) => {
      
      if (photo._id === id) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });
    setAllData(updatedArr);
    console.log(updatedArr, "updatedArr");
  };

  const addToCart = (newItem) => {
    setCartItems((prevItems) => [...prevItems, newItem]);
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item._id !== id));
  };

  const emptyCart = () => {
    setCartItems([]);
  };

  return (
    <Context.Provider
      value={{
        allData,
        toggleFavorite,
        cartItems,
        addToCart,
        removeFromCart,
        emptyCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
