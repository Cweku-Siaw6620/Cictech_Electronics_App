import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useState,useEffect, } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native';
import ProductCard from '../Components/ProductCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCart } from '../Components/CartProvider'; // Adjust the path to your CartContext file
import { SafeAreaView } from 'react-native-safe-area-context';


const TopTab = createMaterialTopTabNavigator();
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

//All stocks tab
 export function AllScreen({navigation}) {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const { addToCart } = useCart(); // Get the addToCart function from context

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://cictech-api-rc4r.onrender.com/products');
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
  return(
    <View>
        <ProductCard 
        products={products}
        addToCart={addToCart}
        onProductPress={(product) => navigation.navigate('ProductDetail', { product })}
      />
      </View> 
  )}


  //HPScreen
  function DisplayHpMachines({navigation}) {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const { addToCart } = useCart(); // Get the addToCart function from context
  
    useEffect(() => {
      const fetchHPProducts = async () => {
        try {
          const response = await axios.get('https://cictech-api-rc4r.onrender.com/products/brand/HP');
          const hpProducts = response.data.filter(product => product.brand === "HP"); // Filter locally
          setProducts(hpProducts);
        } catch (error) {
          console.error("Error fetching HP products:", error);
        }
      };

      const loadCartItems = async () => {
        const items = await getCartItems();
        if (items) {
          setCartItems(items);
        }
      };
  
      fetchHPProducts();
      loadCartItems();
    }, []);
  
    return (
      <View>
        <ProductCard 
          products={products}
          addToCart={addToCart}
          onProductPress={(product) => navigation.navigate('ProductDetail', { product })}
        />
      </View>
    );
  }

  //Dell Screen
  function DisplayDellMachines() {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const { addToCart } = useCart(); 
  
    useEffect(() => {
      const fetchDellProducts = async () => {
        try {
          const response = await axios.get('https://cictech-api-rc4r.onrender.com/products');
          const dellProducts = response.data.filter(product => product.brand === "Dell");
          setProducts(dellProducts);
        } catch (error) {
          console.error("Error fetching Dell products:", error);
        }
      };

      const loadCartItems = async () => {
        const items = await getCartItems();
        if (items) {
          setCartItems(items);
        }
      };
  
      fetchDellProducts();
      loadCartItems();
    }, []);
  
    return (
      <View>
        <ProductCard 
          products={products}
          addToCart={addToCart}
          onProductPress={(product) => navigation.navigate('ProductDetail', { product })}
        />
      </View>
    );
  }


//Lenovo
function DisplayLenovoMachines() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const { addToCart } = useCart(); 

  useEffect(() => {
    const fetchLenovoProducts = async () => {
      try {
        const response = await axios.get('https://cictech-api-rc4r.onrender.com/products');
        const lenovoProducts = response.data.filter(product => product.brand === "Lenovo");
        setProducts(lenovoProducts);
      } catch (error) {
        console.error("Error fetching Lenovo products:", error);
      }
    };

    const loadCartItems = async () => {
      const items = await getCartItems();
      if (items) {
        setCartItems(items);
      }
    };

    fetchLenovoProducts();
    loadCartItems();  
  }, []);

  return (
    <View>
      <ProductCard 
        products={products}
        addToCart={addToCart}
        onProductPress={(product) => navigation.navigate('ProductDetail', { product })}
      />
    </View>
  );
}

  //MacScreen
  function DisplayMacMachines(){
    return(
      <View>
        <Text>Mac Screen</Text>
      </View>
    )
  }


  //Main HomeScreen
  export default function HomeScreen({navigation, route}){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [profileImage, setProfileImage] = useState(null);
    const [username, setUsername] = useState('');
  
    useEffect(() => {
      if (route.params?.username && route.params?.profileImage) {
        setUsername(route.params.username);
        setProfileImage(route.params.profileImage);
        setIsLoggedIn(true);
      }
    }, [route.params]);
  
   /* const handleLogout = () => {
      setIsLoggedIn(false);
      setProfileImage(null);
      setUsername('');
      navigation.navigate('SignUp'); // Optionally, navigate back to the signup screen
    };*/
    
    const login =()=>{
      navigation.navigate('LoginScreen')
    }

    return(
      <SafeAreaView style={styles.container}>
    <View style={{flexDirection:'row', columnGap:50}} >
      <Image source={require("../assets/logo.jpg")}/>


      {isLoggedIn ? (
        <>
          <Image source={{ uri: profileImage }} style={styles.profileImage} />
          <Text style={styles.welcomeText}>{username}!</Text>
          {/*<Button title="Log Out" onPress={handleLogout} />*/}
        </>
      ) : (
        <TouchableOpacity onPress={login}>
      <Text style={{marginTop:20, fontWeight:'bold'}}>SignIn/SignUp</Text>
      </TouchableOpacity>
      )}
      
    </View>

      <TopTab.Navigator
        screenOptions={{
          tabBarScrollEnabled: true, // Enable horizontal scrolling
          tabBarItemStyle: { width: 100 }, // Width of each tab item
          tabBarLabelStyle: { fontSize: 10 },
          tabBarIndicatorStyle: { backgroundColor: '#000' },
        }}
      >
      <TopTab.Screen name='All' component={AllScreen}/>
      <TopTab.Screen name='HP' component={DisplayHpMachines}/>
      <TopTab.Screen name='Dell' component={DisplayDellMachines}/>
      <TopTab.Screen name='Lenovo' component={DisplayLenovoMachines}/>
      <TopTab.Screen name='Mac' component={DisplayMacMachines}/>
      

    </TopTab.Navigator>
    </SafeAreaView>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"white",
      marginTop:4,
      
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 75,
      marginBottom: 16,
    },
    welcomeText: {
      fontSize: 24,
      marginBottom: 16,
    },
  });