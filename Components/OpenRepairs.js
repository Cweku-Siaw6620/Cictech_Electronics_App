// SubmitScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView,TouchableOpacity,Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@form_data';

const OpenRepairs = ({ route }) => {
  const { name, location, description } = route.params;
  const [formData, setFormData] = useState([]);
  const [deletionEnabled, setDeletionEnabled] = useState(true);


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

  const toggleDeletion = () => {
    setDeletionEnabled(!deletionEnabled);
  };

  return (
    <ScrollView style={styles.container}>
      {formData.map((item, index) => (
        <View key={index} style={styles.item}>
          <Text style={styles.label}>Name: {item.name}</Text>
          <Text style={styles.label}>Location: {item.location}</Text>
          <Text style={styles.label}>Description: {item.description}</Text>
          {deletionEnabled && (
              <TouchableOpacity onPress={() => handleDelete(index)} style={styles.deleteButton}>
                <Text style={styles.deleteButtonText}>Delete</Text>
              </TouchableOpacity>
            )}
                  <Button title="Confirm" onPress={toggleDeletion} />

          </View>
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    marginBottom: 16,
  },
  label: {
    fontSize: 18,
    marginVertical: 4,
  },
  deleteButton: {
    marginTop: 8,
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 4,
  },
  deleteButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default OpenRepairs;
