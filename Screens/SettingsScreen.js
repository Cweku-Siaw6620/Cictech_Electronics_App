import {View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SettingsScreen({navigation}) {

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

        <TouchableOpacity style={styles.touch}>
        <Text style={styles.text}>Push Notification</Text>
       
        </TouchableOpacity>

        <TouchableOpacity style={styles.touch}>
        <Text style={styles.text}>Privacy and Policy</Text>
        <Icon style={{marginLeft:100}} name="angle-right" size={30} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.touch}>
        <Text style={styles.text}>Theme</Text>
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