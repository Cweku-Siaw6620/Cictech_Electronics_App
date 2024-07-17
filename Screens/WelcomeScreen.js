import { StatusBar } from 'expo-status-bar';
import { ImageBackground,Text, View, StyleSheet,  TouchableOpacity } from 'react-native';
import Home from '../Components/Home';

export default function WelcomeScreen({navigation}) {
  return (
    <ImageBackground 
    style={styles.ImageBackground}
    source={require("../assets/logo.jpg")}>
      <View>
      <Text>Hi</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  ImageBackground: {
  flex:1,
  },
});



