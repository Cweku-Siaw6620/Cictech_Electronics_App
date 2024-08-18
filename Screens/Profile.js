import React,{useState,useEffect} from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, Linking, Modal} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Profile({navigation,route}) {
  const [modalVisible, setModalVisible] = useState(false);
  const phoneNumber = '0249509090';
  const countryCode = '233';
  const whatsappURL = `whatsapp://send?phone=${countryCode}${phoneNumber}`;
  //Login in codes
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [username, setUsername] = useState('');

  useEffect(() => {
    if (route.params?.username && route.params?.profileImage) {
      setUsername(route.params.username);
      setProfileImage(route.params.profileImage);
      setIsLoggedIn(true);
    }
  }, [route.params]);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handlePhonePress = () => {
    Linking.openURL(`tel:${phoneNumber}`).catch((err) => 
      Alert.alert("Error", `Failed to dial: ${err.message}`)
    );
  };

  const handleWhatsappPress = () => {
    Linking.openURL(whatsappURL).catch((err) => 
      Alert.alert("Error", `Failed to open WhatsApp: ${err.message}`)
    );
  };

  const  handleFacebookClick = () => {
    // Replace with your Facebook URL
    const facebookUrl = 'https://www.facebook.com/cictechelectronics/';
    Linking.openURL(facebookUrl);
  };

  const navigateToSettings=()=>{
    navigation.navigate('Settings')
  }
  
  navigateToHomeScreen=()=>{
    navigation.navigate('Home')
  }

  navigateToCart=()=>{
    navigation.navigate('Cart')
  }
  navigateToTransaction=()=>{
    navigation.navigate('Transactions')
  }

  const navigateToAccountScreen =()=>{
    navigation.navigate('Account')
  }
  
  const navigateToLogin =()=>{
    navigation.navigate('LoginScreen')
  }

  return (
    <>
    <View style={styles.header_container}>
      <Text>Profile</Text>
    </View>
    <ScrollView style={{flex:1}}>
<ImageBackground 
      style={styles.backgroundImage}
      source={require('../assets/profile-background.jpg')}
    >
      {isLoggedIn ? (
        <>
        <TouchableOpacity onPress={navigateToAccountScreen}>
          <Image source={{ uri: profileImage }} style={styles.profileImage} />
          <Text style={styles.buttonText}>{username}</Text>
          </TouchableOpacity>
          {/*<Button title="Log Out" onPress={handleLogout} />*/}
        </>
      ) : (
        <View style={styles.overlayContainer}>
        <TouchableOpacity style={styles.button} onPress={navigateToLogin}>
          <Image 
            source={require('../assets/person-outline.png')} 
            style={styles.profileImage} 
          />
          <Text style={styles.buttonText}>Login to View</Text>
        </TouchableOpacity>
      </View>
      )}
    </ImageBackground>
    
    
      <View style={styles.ImageContainer}>
      <View>
        <TouchableOpacity onPress={navigateToHomeScreen}>
        <Image style={styles.Image} source={require("../assets/home.jpg")}/>
        <Text style={{marginLeft:30,fontSize:10}}>Home</Text>
        </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={navigateToCart}>
        <Image style={styles.Image} source={require("../assets/cart.jpg")}/>
        <Text style={{marginLeft:40,fontSize:10}}>Cart</Text>
        </TouchableOpacity>
        </View>
        <View style={{marginLeft:10}}>
        <TouchableOpacity onPress={navigateToTransaction}>
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

          {/*View Market */}
        <TouchableOpacity style={styles.touch} onPress={navigateToHomeScreen}>
        <Icon name="home" size={30} color="black" />
        <Text style={styles.text}>View Market</Text>
        <Icon style={{marginLeft:150}} name="angle-right" size={30} color="black" />
        </TouchableOpacity>

          {/*Contact Us */}
        <TouchableOpacity style={styles.touch} onPress={openModal}>
        <Icon name="phone" size={30} color="black" />
        <Text style={styles.text}>ContactUs</Text>
        <Icon style={{marginLeft:175}} name="angle-right" size={30} color="black" />
        </TouchableOpacity>

          {/*Modal Screen here */}
       <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Image source={require("../assets/logo.jpg")} style={styles.logo}/>
            <Text>CICTECH ELECTRONICS</Text>
            <Text style={styles.modalText}>Contact Us</Text>
            <TouchableOpacity style={{flexDirection:'row',columnGap:20,marginBottom:20}} onPress={handlePhonePress}>
            <Image style={styles.modalImage} source={require('../assets/phone.jpg')}/>
            <Text style={{fontSize:18}}>{phoneNumber}</Text>

            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row',columnGap:20,marginBottom:20}} onPress={handleWhatsappPress}>
            <Image style={styles.modalImage} source={require('../assets/whatsapp.jpg')}/>
            <Text style={{fontSize:18}}>{phoneNumber}</Text>
            </TouchableOpacity>

            <Text style={{fontWeight:'bold'}}>We Do What They Don't</Text>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal> 

          {/*Settings */}
        <TouchableOpacity style={styles.touch} onPress={navigateToSettings}>
        <Icon name="cog" size={30} color="black" />
        <Text style={styles.text}>Settings</Text>
        <Icon style={{marginLeft:190}} name="angle-right" size={30} color="black" />
        </TouchableOpacity>

          {/*LogOut */}
          {/*Navigation to be done*/}
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
        
        <View style={{marginTop:20, alignItems:"center"}}>
        <Image source={require("../assets/logo.jpg")}/>
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
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover', 
    height:200
  },
  overlayContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    borderRadius: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50, 
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#fff', 
  },
  buttonText: {
    color: '#fff', 
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
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
   },

   logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
   
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
    fontWeight:'bold'
  },
  closeButton: {
    backgroundColor: '#2196F3',
    borderRadius: 5,
    padding: 10,
  },
  closeButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  modalImage:{
    height:35,
    width: 35,
    borderRadius:15,
  }
});
