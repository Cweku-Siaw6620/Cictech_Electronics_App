import React,{useEffect} from 'react';
import { Text, View ,Image,TouchableOpacity,Animated} from 'react-native';

export default function ConfirmationScreen({navigation}) {
/* const opacity = new Animated.Value(1);

  useEffect(() => {
    // Fade out after 3 seconds
    Animated.timing(opacity, {
      toValue: 0,
      duration: 500,
      delay: 2000,
      useNativeDriver: true,
    }).start(() => {
      // Navigate to Home screen
      navigation.replace('HomeComponent');
    });
  }, [navigation]);
*/

  return (
      <View>
          <Image source={require('../assets/order-confirmed.jpg') } style={{borderRadius:100}} />
        </View>
  );
}

