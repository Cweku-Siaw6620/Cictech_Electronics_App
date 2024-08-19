import { useState,useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View,Text,StyleSheet, Platform,  } from 'react-native';
import WelcomeScreen from './Screens/WelcomeScreen';
import HomeScreen from './Screens/HomeScreen';
import CartScreen from './Screens/CartScreen';
import Profile from './Screens/Profile';
import RepairScreen from './Screens/RepairScreen';
import { Fontisto, Ionicons } from '@expo/vector-icons';
import ProductDetail from './Components/ProductDetail';
import SettingsScreen from './Screens/SettingsScreen';
import AccountDetail from './Components/AccountDetail';
import TransactionScreen from './Components/TransactionScreen';
import RepairComponent from './Components/RepairComponent';
import OpenRepairs from './Components/OpenRepairs';
import RepairForm from './Components/RepairForm';
import Checkout from './Components/Checkout';
import { CartProvider } from './Components/CartProvider'; // Adjust the path to your CartContext file
import RegisterScreen from './Screens/RegisterScreen';
import LoginScreen from './Screens/LoginScreen';
import ProfilePictureScreen from './Screens/ProfilePictureScreen';


const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

function RepairTabs({route}){
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (route.params?.username) {
      setUsername(route.params.username);
      setIsLoggedIn(true);
    }
  }, [route.params]);

  const getCurrentDate = () => {
    const date = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  return(
    <View style={{flex:1}}>
      <Text style={styles.dateText}>{getCurrentDate()}</Text>
      {/*Input Customer's name here */}

      {isLoggedIn ? (
        <>
         <Text style={{fontSize:30,fontWeight:'bold',marginBottom:10 ,marginLeft:10}}>Hello {username}</Text>
          {/*<Button title="Log Out" onPress={handleLogout} />*/}
        </>
      ) : (
        <Text style={{fontSize:30,fontWeight:'bold',marginBottom:10 ,marginLeft:10}}>Hello .......</Text>
      )}

      <View style={{flexDirection:'row',columnGap:80, marginLeft:10}}></View>
      
    <TopTab.Navigator>
      <TopTab.Screen name='Repair' component={RepairScreen}/>
      <TopTab.Screen name='OpenRepairs' component={OpenRepairs}/>

    </TopTab.Navigator>
    </View>
  )
}

function Home() {
    return (
          <Tabs.Navigator initialRouteName='Home'>
              <Tabs.Screen  options={{
                headerShown:false,
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="home" size={size} color={color} />
                ),
              }}
               name='Home' component={HomeScreen}
               />

              <Tabs.Screen  options={{
                headerShown:false, 
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="cart" size={size} color={color} />
                ),
              }} 
              name='Cart' component={CartScreen}/>

              {/*<Tabs.Screen  options={{
                headerShown:false,
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="laptop" size={size} color={color} />
                ),
              }}
              name='Repairs' 
              component={RepairTabs}
              />*/}

              <Tabs.Screen
                name='Repairs' 
                component={RepairTabs}
                options={{
                 headerShown:false,
                  tabBarIcon:({focused})=>{
                    return(
                      <View style={{
                        alignItems:"center",
                        justifyContent:"center",
                        backgroundColor: 'white',
                        height: Platform.OS =='ios'? 50 : 60,
                        width: Platform.OS =='ios'? 50 : 60,
                        top: Platform.OS =='ios'? -10 : -20,
                        borderRadius: Platform.OS =='ios'? 25 : 30,
                        borderWidth:2,
                        borderColor:'brown',
                      }}>
                        
                        <Fontisto
                        name='laptop'
                        size={24}
                        color={'gray'}
                        />
                      </View>
                    )}
                }}
              />
              <Tabs.Screen  options={{
                 headerShown:false,
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="cash" size={size} color={color} />
                ),
              }} 
              name='Bidding' component={Profile}/>

              <Tabs.Screen  options={{
                 headerShown:false,
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="person-outline" size={size} color={color} />
                ),
              }} 
              name='Profile' component={Profile}/>
          </Tabs.Navigator>
    );
  }

export default function App() {
  return(
    <CartProvider>
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome'>
            <Stack.Screen
             options={{headerShown:false}}
            name='Welcome' component={WelcomeScreen}/>
            <Stack.Screen 
            options={{headerShown:false}}
            name='HomeComponent' component={Home}
            />
            <Stack.Screen 
            name='ProductDetail' component={ProductDetail}
            />
             <Stack.Screen 
            name='Settings' component={SettingsScreen}
            />
             <Stack.Screen 
            name='Account' component={AccountDetail}
            />
            <Stack.Screen 
            name='Transactions' component={TransactionScreen}
            />
            <Stack.Screen 
            options={{headerShown:false}}
            name='RepairComponent' component={RepairComponent}
            />
             <Stack.Screen 
            name='RepairForm' component={RepairForm}
            />
            <Stack.Screen 
            options={{headerShown:false}}
            name='RegisterScreen' component={RegisterScreen}
            />
            <Stack.Screen 
            options={{headerShown:false}}
            name='LoginScreen' component={LoginScreen}
            />
            <Stack.Screen 
            options={{headerShown:false}}
            name='ProfilePicture' component={ProfilePictureScreen}
            />
            <Stack.Screen 
            name='Checkout' component={Checkout}
            />
        </Stack.Navigator>
    </NavigationContainer>
    </CartProvider>
)
}

const styles = StyleSheet.create({
  dateText: {
    fontSize: 15,
    marginTop: 40,
    marginLeft:10
  },
})