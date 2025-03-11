import {View, Text, StyleSheet, Switch } from 'react-native';
import React, {useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SettingsScreen({navigation}) {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  //Backend Devs must complete the functions of these toggles.
  
  const navigateToAccountScreen =()=>{
    navigation.navigate('Account')
  }

  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{
          rowGap:13,
          }}>

        <TouchableOpacity style={styles.touch} onPress={navigateToAccountScreen}>
        <Text style={styles.text}>My Account</Text>
        <Icon style={{marginLeft:200}} name="angle-right" size={30} color="black" />
        </TouchableOpacity>

        <View style={styles.touch}>
        <Text style={styles.text}>Push Notification</Text>
        <Switch
        trackColor={{ false: "black", true: "blue" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        style={{marginLeft:120}}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
        </View>

        <TouchableOpacity style={styles.touch}>
        <Text style={styles.text}>Privacy and Policy</Text>
        <Icon style={{marginLeft:130}} name="angle-right" size={30} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.touch}>
        <Text style={styles.text}>About Us</Text>
        <Icon style={{marginLeft:220}} name="angle-right" size={30} color="black" />
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    marginLeft:36,
    fontWeight: 'bold',
    fontSize: 16,
   },
  touch: {
    opacity:0.6,
    flexDirection:'row',
    paddingVertical:23,
    borderBottomWidth:0.5,
    
   },

})