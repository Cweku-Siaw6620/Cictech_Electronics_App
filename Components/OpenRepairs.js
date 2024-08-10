import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function OpenRepairs({ route }) {
  const { name, location, description } = route.params || {};
  const [storedData, setStoredData] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    const storeData = async () => {
      try {
        const existingData = await AsyncStorage.getItem('@open_repairs_data');
        const parsedData = existingData ? JSON.parse(existingData) : [];

        // Check if the data already exists to prevent duplication
        if (name || location || description) {
          const isDuplicate = parsedData.some(
            item =>
              item.name === name &&
              item.location === location &&
              item.description === description
          );

          if (!isDuplicate) {
            const newData = [...parsedData, { name, location, description }];
            await AsyncStorage.setItem('@open_repairs_data', JSON.stringify(newData));
            setStoredData(newData);
          } else {
            setStoredData(parsedData); // Just load existing data if no new data is passed
          }
        } else {
          setStoredData(parsedData); // Just load existing data if no new data is passed
        }
      } catch (e) {
        console.error(e);
      }
    };

    storeData();
  }, [name, location, description]);

  const handleComplete = async (index) => {
    try {
      const updatedData = storedData.filter((_, i) => i !== index);
      await AsyncStorage.setItem('@open_repairs_data', JSON.stringify(updatedData));
      setStoredData(updatedData);
    } catch (e) {
      console.error(e);
    }
  };

  const handleExpandToggle = (index) => {
    setExpandedIndex(prevIndex => prevIndex === index ? null : index);
  };

  return (
    <View style={styles.container}>
      {storedData.length > 0 ? (
        storedData.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <TouchableOpacity onPress={() => handleExpandToggle(index)} style={styles.itemHeader}>
              <Text style={styles.itemTitle}>Ongoing Repairs</Text>
            </TouchableOpacity>
            {expandedIndex === index && (
              <Animated.View style={styles.expandedContent}>
               <Text style={styles.text}> Name: {item.name}</Text>
                <Text style={styles.text}>Location: {item.location}</Text>
                <Text style={styles.text}>Description: {item.description}</Text>
                <TouchableOpacity style={styles.completeButton} onPress={() => handleComplete(index)}>
                  <Text style={styles.completeButtonText}>Completed</Text>
                </TouchableOpacity>
              </Animated.View>
            )}
          </View>
        ))
      ) : (
        <Text style={styles.noRepairsText}>No open Repairs</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  itemContainer: {
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  itemHeader: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  expandedContent: {
    padding: 15,
    backgroundColor: '#fdfdfd',
  },
  text: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  completeButton: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#4caf50',
    borderRadius: 5,
    alignItems: 'center',
  },
  completeButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  noRepairsText: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
    marginTop: 50,
  },
});
