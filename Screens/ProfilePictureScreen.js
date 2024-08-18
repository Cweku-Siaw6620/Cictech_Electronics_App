import React, { useState } from 'react';
import { View, Text, Button, Alert, StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ProfilePictureScreen = ({ navigation, route }) => {
  const { username } = route.params;
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePicked, setImagePicked] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setImagePicked(true); // Set imagePicked to true when an image is selected
    }
  };

  const handleContinue = () => {
    if (selectedImage) {
      navigation.navigate('Home', { username, profileImage: selectedImage });
      navigation.navigate('Repairs', { username });
      navigation.navigate('Profile', { username, profileImage: selectedImage });
    } else {
      Alert.alert('Please select an image.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Profile Picture</Text>

      <TouchableOpacity onPress={pickImage}>
        <Text style={styles.pickImageText}>Pick an Image from Gallery</Text>
      </TouchableOpacity>

      {selectedImage && (
        <Image source={{ uri: selectedImage }} style={styles.selectedImage} />
      )}

      <Button title="Continue" onPress={handleContinue} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
  },
  pickImageText: {
    color: 'blue',
    marginBottom: 16,
  },
  selectedImage: {
    width: 150,
    height: 150,
    marginBottom: 16,
  },
});

export default ProfilePictureScreen;
