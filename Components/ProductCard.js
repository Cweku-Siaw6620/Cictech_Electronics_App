import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';

export default function ProductCard({ products, addToCart, onProductPress }) {

  const truncateDescription = (description, wordLimit) => {
    const words = description.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return description;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
       keyExtractor={(item, index) => item._id.toString() + index.toString()}
        numColumns={2} // Display items in two columns
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <TouchableOpacity onPress={() => onProductPress(item)}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
            <Text style={styles.productDescription}>
              {truncateDescription(item.description, 8)}
            </Text>
            <Text style={styles.productPrice}>
              {item.price !== undefined ? `Ghc ${parseFloat(item.price).toFixed(2)}` : 'N/A'}
            </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => addToCart(item)}>
              <Image source={require("../assets/add_circle.png")} style={{height:40, width:40}}/>
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 105 }} // Adjust padding to prevent overlap with other content
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  productContainer: {
    flex: 1,
    margin: 3,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
  },
});
