import { useState,useEffect, } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, } from 'react-native';
import ProductCard from '../Components/ProductCard';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CART_ITEMS = 'CART_ITEMS';

export const storeCartItems = async (items) => {
  try {
    await AsyncStorage.setItem(CART_ITEMS, JSON.stringify(items));
  } catch (e) {
    console.error(e);
  }
};

export const getCartItems = async () => {
  try {
    const items = await AsyncStorage.getItem(CART_ITEMS);
    return items ? JSON.parse(items) : [];
  } catch (e) {
    console.error(e);
  }
};


export default function HomeScreen({navigation}) {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    };
     
    const loadCartItems = async () => {
      const items = await getCartItems();
      if (items) {
        setCartItems(items);
      }
    };

    fetchProducts();
    loadCartItems();
  },[])

  const addToCart = async (product) => {
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
    await storeCartItems(updatedCart);
    cartItems.push(product);
    await AsyncStorage.setItem('cart', JSON.stringify(cartItems));
    navigation.navigate('CartScreen'); 
    
  };
  
  return(
    <View style={styles.container}>
    <View style={{flexDirection:'row', columnGap:50,marginBottom:30}} >
      <Image source={require("../assets/logo.jpg")}/>
      <TouchableOpacity>
      <Text style={{marginTop:20, fontWeight:'bold'}}>SignIn/SignUp</Text>
      </TouchableOpacity>
    </View>

    <View>
        <ProductCard 
        products={products}
        addToCart={addToCart}
        onProductPress={(product) => navigation.navigate('ProductDetail', { product })}
      />
      </View>

    </View>
  )}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"white",
      marginTop:35,
      
    },
  });