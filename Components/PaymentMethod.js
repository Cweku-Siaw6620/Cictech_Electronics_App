import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';

const PaymentMethodScreen = ({ route,navigation }) => {
  const {name,number,address, paymentMethod } = route.params;

  return (
    <View style={styles.container}>
      {paymentMethod === 'Cash' ? (
        <View>
        <Image
        style={styles.image}
        source={require('../assets/order-confirmed.jpg')}
        />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Select Destination</Text>
      </TouchableOpacity>     
      </View>

      ) : paymentMethod==='MobileMoney' ?(
        <View>
        <Image
        style={styles.image}
        source={require('../assets/order-confirmed.jpg')}
        />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Select Destination</Text>
      </TouchableOpacity>     
      </View>


      ): paymentMethod==='Vodafone' ?(
        <View>
        <Image
        style={styles.image}
        source={require('../assets/order-confirmed.jpg')}
        />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Select Destination</Text>
      </TouchableOpacity>     
      </View>


      ): paymentMethod==='AirtelTigo' ?(
        <View>
        <Image
        style={styles.image}
        source={require('../assets/order-confirmed.jpg')}
        />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Select Destination</Text>
      </TouchableOpacity>     
      </View>


      ):(
        <Text style={styles.text}>Order Cancelled</Text> 
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    borderRadius:125
  }, 
   button: {
    backgroundColor: 'gray',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop:80
  },
  buttonText: {
    marginLeft: 10,
    color: '#fff',
    fontSize: 18,
  },
});

export default PaymentMethodScreen;
