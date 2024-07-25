import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome/';


export default function RepairScreen({navigation}) {

  const getCurrentDate = () => {
    const date = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  const Images =[
    {
      id:1,
      name:'Hp repairs',
      Image: require("../assets/hp-logo.jpeg")
    },
    {
      id:2,
      name:'DELL repairs',
      Image: require("../assets/dell-logo.jpeg")
    },
    {
      id:3,
      name:'Lenovo repairs',
      Image: require("../assets/lenovo-logo.jpeg")
    },
    {
      id:4,
      name:'MacOs repairs',
      Image: require("../assets/apple-logo.jpeg")
    },
    {
      id:5,
      name:'Acer repairs',
      Image: require("../assets/acer-logo.jpeg")
    },
    {
      id:6,
      name:'Asus repairs',
      Image: require("../assets/asus-logo.jpeg")
    },
    {
      id:7,
      name:'Monitor repairs',
      Image: require("../assets/monitor.jpeg")
    },
    {
      id:8,
      name:'System Unit repairs',
      Image: require("../assets/system-unit.jpeg")
    },
  ];


  return (
    <ScrollView style={styles.container}>
   
      <Text style={styles.dateText}>{getCurrentDate()}</Text>
      {/*Input Customer's name here */}
      <Text style={{fontSize:30,fontWeight:'bold',marginBottom:50 ,marginLeft:10}}>Hello .......</Text>

      <View style={{flexDirection:'row',columnGap:80, marginLeft:10}}>
      <Text style={{fontWeight:'bold'}}>CICTECH LAPTOP REPAIRS </Text>
      <Icon name="angle-right" size={30} color="black"/>
      </View>

      <FlatList
      data={Images}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
          <View style={{margin:6,marginRight:6}}>
            <TouchableOpacity>
                <Image source={item.Image} style={styles.images} />
                </TouchableOpacity>
                <View style={{flexDirection:"row",columnGap:40}}>
                <Text style={{fontWeight:'bold'}}>{item.name}</Text>
               </View>
              </View>
            )}
                numColumns={2}
            />
    
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:30,
    marginBottom:5
  },
  dateText: {
    fontSize: 15,
    marginBottom: 20,
    marginLeft:10
  },
  images:{ 
    width: 180, 
    height: 240,
    borderRadius:20 
  }
});
