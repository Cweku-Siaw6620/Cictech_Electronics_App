import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, Animated } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  const opacity = new Animated.Value(1);

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

  return (
    <Animated.View style={[styles.container, { opacity }]}>
      <Image source={require('../assets/logo.jpg')} style={styles.logo} />
      <Text style={styles.text}>CICTECH</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;