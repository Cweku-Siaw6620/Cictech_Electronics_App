import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@form_data';

const RepairForm = ({ route, navigation }) => {
  const { name, location, description } = route.params || {};
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    const saveData = async () => {
      try {
        const existingData = await AsyncStorage.getItem(STORAGE_KEY);
        const parsedData = existingData ? JSON.parse(existingData) : [];
        const newData = [...parsedData, { name, location, description }];
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
        setFormData(newData);
      } catch (e) {
        console.error(e);
      }
    };

    saveData();
  }, [name, location, description]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const existingData = await AsyncStorage.getItem(STORAGE_KEY);
        const parsedData = existingData ? JSON.parse(existingData) : [];
        setFormData(parsedData);
      } catch (e) {
        console.error(e);
      }
    };

    loadData();
  }, []);

  const handleDelete = async (index) => {
    try {
      const updatedData = formData.filter((_, i) => i !== index);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));
      setFormData(updatedData);
    } catch (e) {
      console.error(e);
    }
  };

  const handleConfirm = (item) => {
    navigation.navigate('OpenRepairs', { name: item.name, location: item.location, description: item.description });
  };

  return (
    <View style={styles.outerContainer}>
      <ScrollView style={styles.container}>
        {formData.map((item, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.label}>Name: {item.name}</Text>
            <Text style={styles.label}>Location: {item.location}</Text>
            <Text style={styles.label}>Description: {item.description}</Text>

            <TouchableOpacity onPress={() => handleDelete(index)} style={styles.deleteButton}>
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.confirmButton} onPress={() => handleConfirm(item)}>
              <Text style={styles.confirmButtonText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '90%',
    height: '90%',
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  item: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: 18,
    marginBottom: 6,
    color: '#333',
    fontWeight: '500',
  },
  deleteButton: {
    marginTop: 10,
    backgroundColor: '#ff4d4d',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  confirmButton: {
    marginTop: 10,
    backgroundColor: '#4caf50',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default RepairForm;
