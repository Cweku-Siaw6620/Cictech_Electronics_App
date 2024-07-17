import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './Screens/WelcomeScreen';
import Home from './Components/Home';

const Stack = createStackNavigator();

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