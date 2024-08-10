import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const RepairComponent = ({ navigation }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    if (!name || !location || !description) {
      Alert.alert('Fill all spaces', 'Please fill out all fields before submitting.');
    } else {
      navigation.navigate('RepairForm', { name, location, description });
      setName('');
      setLocation('');
      setDescription('');
    }
  };

  return (
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={require('../assets/repair-banner.jpg')} style={styles.banner} />
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
          placeholderTextColor="#888"
        />
        <Text style={styles.label}>Location:</Text>
        <TextInput
          style={styles.input}
          value={location}
          onChangeText={setLocation}
          placeholder="Enter the location"
          placeholderTextColor="#888"
        />
        <Text style={styles.label}>Description:</Text>
        <TextInput
          style={styles.input}
          value={description}
          onChangeText={setDescription}
          placeholder="Describe the issue"
          placeholderTextColor="#888"
          multiline
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
        <Image source={require('../assets/repair-banner-1.jpg')} style={styles.footerImage} />
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    padding: 20,
    alignItems: 'center',
  },
  banner: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 15,
    marginBottom: 20,
  },
  label: {
    fontSize: 20,
    color: '#333',
    marginBottom: 10,
    fontWeight: '600',
    alignSelf: 'flex-start',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#007BFF',
    borderBottomWidth: 2,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  submitButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    elevation: 2,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  footerImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 15,
    marginTop: 30,
  },
});

export default RepairComponent;
