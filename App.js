import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './Screens/WelcomeScreen';
import HomeScreen from './Screens/HomeScreen';
import CartScreen from './Screens/CartScreen';
import Profile from './Screens/Profile';
import RepairScreen from './Screens/RepairScreen';
import { Ionicons } from '@expo/vector-icons';
import ProductDetail from './Components/ProductDetail';
import SettingsScreen from './Screens/SettingsScreen';
import AccountDetail from './Components/AccountDetail';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function Home() {
    return (
          <Tabs.Navigator initialRouteName='Home'>
              <Tabs.Screen  options={{
                headerShown:false,
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="home" size={size} color={color} />
                ),
              }}
               name='HomeScreen' component={HomeScreen}
               />

              <Tabs.Screen  options={{
                headerShown:false, 
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="cart" size={size} color={color} />
                ),
              }} 
              name='Cart' component={CartScreen}/>

              <Tabs.Screen  options={{
                headerShown:false,
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="laptop" size={size} color={color} />
                ),
              }}
              name='Repairs' 
              component={RepairScreen}
              />

              <Tabs.Screen  options={{
                 headerShown:false,
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="man" size={size} color={color} />
                ),
              }} 
              name='Profile' component={Profile}/>
          </Tabs.Navigator>
    );
  }

export default function App() {
  return(
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
            options={{headerShown:false}}
            name='ProductDetail' component={ProductDetail}
            />
             <Stack.Screen 
            name='Settings' component={SettingsScreen}
            />
             <Stack.Screen 
            name='Account' component={AccountDetail}
            />
        </Stack.Navigator>
    </NavigationContainer>
)
}