import { StyleSheet,View, Text, Image, ScrollView,TouchableOpacity} from 'react-native';


export default function ProductDetail({route}) {
const {product} = route.params;

  return (
    <>
   <ScrollView style={styles.container}>    

        <Image source={{uri: product.image}} style={styles.image}/>
        <Text style={styles.names}>{product.title}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <Text style={styles.description}>{product.description}</Text>
                
        
        
   </ScrollView>
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   padding: 20,
  
  },
  header:{
    flexDirection: "row",
    columnGap:10,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 40
  },
  image:{
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  names:{
    marginTop: 10,
    fontSize: 24,
    fontWeight:"bold",
  },
  price:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff5252',
    marginBottom: 20,
  },
  material: {
    marginTop: 25,
    fontWeight: 'bold',
    fontSize: 22,
  },
  whiteIcon: {
    tintColor: 'white',
    width: 24,
    height: 24,
},
addToBasketContainer: {
    backgroundColor: 'black',
    height: 50,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
},

});
