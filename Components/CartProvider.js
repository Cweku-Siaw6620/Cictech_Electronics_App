import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  
  useEffect(() => {
    const loadCartItems = async () => {
      const items = await AsyncStorage.getItem('CART_ITEMS');
      if (items) {
        const parsedItems = JSON.parse(items);
        const updatedCart = parsedItems.map(item => ({
          ...item,
          quantity: item.quantity || 1, // Ensure quantity is set to 1 if not defined
        }));
        setCartItems(updatedCart);
      }
    };
    loadCartItems();
  }, []);

  const addToCart = async (product) => {
    const itemExists = cartItems.some((item) => item.id === product.id);
    if (itemExists) {
      Alert.alert("Already added", `${product.title} is already in the cart.`);
      return;
    }

    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
    await AsyncStorage.setItem('CART_ITEMS', JSON.stringify(updatedCart));
  };

  const removeFromCart = async (product) => {
    const updatedCart = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCart);
    await AsyncStorage.setItem('CART_ITEMS', JSON.stringify(updatedCart));
  };
  const updateQuantity = (item, newQuantity) => {
    setCartItems((prevItems) => {
      return prevItems.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: newQuantity > 0 ? newQuantity : 1  } : cartItem
      );
    });
  };
  

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart,updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
