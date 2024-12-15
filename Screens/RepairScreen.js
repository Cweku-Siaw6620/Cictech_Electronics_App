import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import { FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function RepairScreen({navigation}) {
  const click = () => navigation.navigate('RepairComponent');

  const machineNames = (["HP repairs","DELL repairs","Lenovo repairs",
                  "MacOs repairs",'Acer repairs','Asus repairs',
                  'Monitor repairs','System Unit repairs' ])
  
  const Images =[
    {
      id:1,
      machineName: machineNames[0],
      Image: require("../assets/hp-logo.jpeg")
    },
    {
      id:2,
      machineName:machineNames[1],
      Image: require("../assets/dell-logo.jpeg")
    },
    {
      id:3,
      machineName: machineNames[2],
      Image: require("../assets/lenovo-logo.jpeg")
    },
    {
      id:4,
      machineName: machineNames[3],
      Image: require("../assets/apple-logo.jpeg")
    },
    {
      id:5,
      machineName: machineNames[4],
      Image: require("../assets/acer-logo.jpeg")
    },
    {
      id:6,
      machineName: machineNames[5],
      Image: require("../assets/asus-logo.jpeg")
    },
    {
      id:7,
      machineName: machineNames[6],
      Image: require("../assets/monitor.jpeg")
    },
    {
      id:8,
      machineName: machineNames[7],
      Image: require("../assets/system-unit.jpeg")
    },
  ];


  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row',columnGap:80, marginLeft:10}}>
      <Text style={{fontWeight:'bold'}}>CICTECH LAPTOP REPAIRS </Text>
      <Icon name="angle-right" size={30} color="black"/>
      </View>

      <FlatList
      data={Images}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
          <View style={{margin:6,marginRight:6}}>

            <TouchableOpacity onPress={click}>
                <Image source={item.Image} style={styles.images} />
                </TouchableOpacity>
                
                <View style={{flexDirection:"row",columnGap:40}}>
                <Text style={{fontWeight:'bold'}}>{item.machineName}</Text>
               </View>
              </View>
            )}
                numColumns={2}
            />
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:10,
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
