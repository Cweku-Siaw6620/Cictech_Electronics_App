import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importing icons from Expo


const PlaceOrder = ({ navigation }) => {
  const [name, setName] = useState('');
  const [number , setNumber] = useState('')
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleCheckboxChange = (method) => {
    setPaymentMethod(method);
  };

  const handleOrder = () => {
    if (name && address && paymentMethod) {
      navigation.navigate('PaymentMethodScreen', {
        name,
        address,
        number,
        paymentMethod, // Pass the selected payment method to the next screen
      });
    } else {
      alert('Please fill in all details');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Place Your Order</Text>
      <Text>Contact Information</Text>
      <TextInput
        style={styles.input}
        placeholder="Contact Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Number"
        value={number}
        onChangeText={setNumber}
      />
      <Text>Delivery Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Shipping Address"
        value={address}
        onChangeText={setAddress}
      />

      <Text style={styles.paymentMethodLabel}>Select Payment Method:</Text>

      <View style={styles.checkboxContainer}>
        {/*For Cash payment */}
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => handleCheckboxChange('Cash')}
        >
          <View style={[styles.checkboxInner, paymentMethod === 'Cash' && styles.checkboxSelected]}>
            {paymentMethod === 'Cash' && (
              <Ionicons name="checkmark" size={18} color="white" />
            )}
          </View>
          <Text style={styles.checkboxLabel}>Cash</Text>
        </TouchableOpacity>

        {/*For MobileMoney payment */}
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => handleCheckboxChange('MobileMoney')}
        >
          <View style={[styles.checkboxInner, paymentMethod === 'MobileMoney' && styles.checkboxSelected]}>
            {paymentMethod === 'MobileMoney' && (
              <Ionicons name="checkmark" size={18} color="white" />
            )}
          </View>
          <Text style={styles.checkboxLabel}>MobileMoney</Text>
        </TouchableOpacity>

        {/*For Vodafone payment */}
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => handleCheckboxChange('Vodafone')}
        >
          <View style={[styles.checkboxInner, paymentMethod === 'Vodafone' && styles.checkboxSelected]}>
            {paymentMethod === 'Vodafone' && (
              <Ionicons name="checkmark" size={18} color="white" />
            )}
          </View>
          <Text style={styles.checkboxLabel}>Vodafone</Text>
        </TouchableOpacity>

        {/*For AirtelTigo payment */}
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => handleCheckboxChange('AirtelTigo')}
        >
          <View style={[styles.checkboxInner, paymentMethod === 'AirtelTigo' && styles.checkboxSelected]}>
            {paymentMethod === 'AirtelTigo' && (
              <Ionicons name="checkmark" size={18} color="white" />
            )}
          </View>
          <Text style={styles.checkboxLabel}>AirtelTigo</Text>
        </TouchableOpacity>
        
      </View>

      <Button title="Confirm" onPress={handleOrder} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 8,
  },
  paymentMethodLabel: {
    fontSize: 18,
    marginBottom: 8,
  },
  checkboxContainer: {
    rowGap:10,
    marginBottom: 24,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  checkboxInner: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderColor: '#007BFF',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  checkboxSelected: {
    backgroundColor: '#007BFF',
    borderColor: '#007BFF',
  },
  checkboxLabel: {
    fontSize: 16,
  },
});

export default PlaceOrder;
