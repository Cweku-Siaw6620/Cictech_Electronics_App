import { NavigationContext } from '@react-navigation/native';
import { ImageBackground,Text, View, StyleSheet,  TouchableOpacity, Button } from 'react-native';

export default function WelcomeScreen({navigation}) {
  /*const Screens = navigation.navigate("HomeComponent")*/

  return (
    <ImageBackground 
    style={styles.ImageBackground}
    source={require("../assets/logo.jpg")}>
    <TouchableOpacity >
    <Text>Home</Text>
    </TouchableOpacity>

    <Button 
      title='Go to Screen'
      onPress={()=>{Screens}}
    />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  ImageBackground: {
  flex:1,
  },
});



