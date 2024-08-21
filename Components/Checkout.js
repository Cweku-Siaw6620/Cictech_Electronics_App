import React from 'react';
import { FlatList, Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native'; // To access passed parameters

export default function Checkout() {
  const route = useRoute();
  const { cartItems } = route.params; // Get cartItems from route parameters

  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  };

  const renderItem = ({ item }) => (
    <View style={styles.checkoutItem}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{item.title}</Text>
        <Text style={styles.price}>{`$${item.price.toFixed(2)}`}</Text>
        <Text>Quantity: {item.quantity}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />

    <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Est. Total:</Text>
        <Text style={styles.totalValue}>${calculateTotal()}</Text>
      </View>
      <TouchableOpacity style={styles.checkoutButton} /*onPress={() => navigation.navigate('Checkout', { cartItems })}*/>
        <Text style={styles.checkoutButtonText}>Place order</Text>
      </TouchableOpacity>
      {/* You can add your payment process here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  checkoutItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginRight: 20,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#888',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  totalLabel: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  totalValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff5252',
  },
  checkoutButton: {
    backgroundColor: '#ff5252',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
