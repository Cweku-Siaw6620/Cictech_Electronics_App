import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './Screens/WelcomeScreen';
import HomeScreen from './Screens/HomeScreen';
import CartScreen from './Screens/CartScreen';
import Profile from './Screens/Profile';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function Home() {
    return (
      <NavigationContainer>
          <Tabs.Navigator initialRouteName='HomeScreen'>
              <Tabs.Screen name='HomeScreen' component={HomeScreen}/>
              <Tabs.Screen name='Cart' component={CartScreen}/>
              <Tabs.Screen name='Profile' component={Profile}/>
          </Tabs.Navigator>
      </NavigationContainer>
    );
  }

export default function App() {
  return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome'>
            <Stack.Screen name='Welcome' component={WelcomeScreen}/>
            <Stack.Screen name='HomeComponent' component={Home}/>
        </Stack.Navigator>
    </NavigationContainer>
)
}