import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, Linking} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Profile({navigation}) {

  const  handleFacebookClick = () => {
    // Replace with your Facebook URL
    const facebookUrl = 'https://www.facebook.com/cictechelectronics/';
    Linking.openURL(facebookUrl);
  };

  const navigateToSettings=()=>{
    navigation.navigate('Settings')
  }
  

  return (
    <>
    <View style={styles.header_container}>
      <Text>Profile</Text>
    </View>
    <ScrollView style={{flex:1}}>
     <ImageBackground 
    style={{height:300}}
    source={require("../assets/profile-background.jpg")}>
      {/* code goes here for profile*/}
    </ImageBackground>
    
    
      <View style={styles.ImageContainer}>
      <View>
        <TouchableOpacity>
        <Image style={styles.Image} source={require("../assets/home.jpg")}/>
        <Text style={{marginLeft:30,fontSize:10}}>Home</Text>
        </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
        <Image style={styles.Image} source={require("../assets/cart.jpg")}/>
        <Text style={{marginLeft:40,fontSize:10}}>Cart</Text>
        </TouchableOpacity>
        </View>
        <View style={{marginLeft:10}}>
        <TouchableOpacity>
        <Image style={styles.Image} source={require("../assets/transaction.jpeg")}/>
        <Text style={{fontSize:10}}>Transactions</Text>
        </TouchableOpacity>
        </View>
      </View>

       <View style={{
          borderRadius:12,
          rowGap:2,
          marginTop:20,
          padding:3
          }}>

          {/*Navigations to be done*/}
        <TouchableOpacity style={styles.touch}>
        <Icon name="home" size={30} color="black" />
        <Text style={styles.text}>View Market</Text>
        <Icon style={{marginLeft:150}} name="angle-right" size={30} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.touch}>
        <Icon name="phone" size={30} color="black" />
        <Text style={styles.text}>ContactUs</Text>
        <Icon style={{marginLeft:175}} name="angle-right" size={30} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.touch} onPress={navigateToSettings}>
        <Icon name="cog" size={30} color="black" />
        <Text style={styles.text}>Settings</Text>
        <Icon style={{marginLeft:190}} name="angle-right" size={30} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.touch}>
        <Icon name="sign-out" size={30} color="black" />
        <Text style={styles.text}>Logout</Text>
        <Icon style={{marginLeft:200}} name="angle-right" size={30} color="black" />
        </TouchableOpacity>
        </View>

      {/*We'll further style this side to make it look nicer*/}
      <View style={{backgroundColor:"white"}}>
        
        <View style={{alignItems:"center",paddingTop:40}}>
        <Text style={styles.text}>Payment Methods</Text>
        <View style={{flexDirection:'row',padding:20,borderBottomWidth:0.5}}>
        <Image style={styles.Image} source={require("../assets/mtn.jpeg")}/>
        <Image style={styles.Image} source={require("../assets/telecel.png")}/>
        <Image style={styles.Image} source={require("../assets/tigo.jpeg")}/>
        <Image style={styles.Image} source={require("../assets/visa.jpeg")}/>
        </View>
        </View>
        
        <View style={{flexDirection:"row",marginTop:20, alignItems:"center"}}>
        <Image style={{height:100,width: 100,}} source={require("../assets/logo.jpg")}/>
        <Text style={styles.text}>We do what they don't</Text>
        </View>

          <TouchableOpacity style={{alignItems:'center',paddingTop:20,paddingBottom:40,opacity:0.5}} onPress={handleFacebookClick}>
            <Text>About Us</Text>
          </TouchableOpacity>
        </View>
    </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  header_container: {
    marginTop:30,
    backgroundColor:"green",
    padding:20
  },
  ImageContainer:{
    alignItems:'center',
    flexDirection:'row',
    columnGap:35, 
    marginTop:20,
    marginLeft:20
  },
  Image:{
    height:35,
    width: 35,
    borderRadius:15,
    marginLeft:30
  },
  text: {
    marginLeft:36,
    fontWeight: 'bold',
    fontSize: 16,
   },
   touch: {
    opacity:0.6,
    flexDirection:'row',
    alignItems:'center',
    paddingVertical:23,
    paddingLeft:12,
    borderBottomWidth:0.5,
    
   }
});
