import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, View, StyleSheet } from 'react-native';

export default function WelcomeScreen({navigation}) {
  return (
    <ImageBackground 
    style={styles.ImageBackground}
    source={require("../assets/logo.jpg")}>
      <View>
      <Text></Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  ImageBackground: {
  flex:1,
  },
});



