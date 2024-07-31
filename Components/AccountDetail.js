import { ImageBackground, StyleSheet, Text, View , Button} from 'react-native';
export default function AccountDetail() {
  return (
    
  <>
    <ImageBackground 
    style={{height:300}}
    source={require("../assets/profile-background.jpg")}>
      {/* code goes here for profile*/}
    </ImageBackground>

    <View style={styles.container}>
      <View style={{rowGap:20}}>
        <Text style={styles.text}>First Name</Text>
        <Text style={styles.text}>Last Name</Text>
        <Text style={styles.text}>User Name</Text>
        <Text style={styles.text}>Location</Text>
        <Text style={styles.text}>Password</Text>
      </View>
      <View style={{rowGap:20}}>
        {/*After the customer signs in */}
        <Text style={styles.text}>//Customers first name</Text>
        <Text style={styles.text}>// last name</Text>
        <Text style={styles.text}>// User Name</Text>
        <Text style={styles.text}>// Location</Text>
        <Text style={styles.text}>// Password</Text>
      </View>
    </View>

    <View style={{marginTop:40, alignItems:'center'}}>
    {/*Backend to determine where this will navigate to*/}
      <Button title='Edit Account' />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    marginTop:20,
    columnGap:70,
    
  },
  text: {
    marginLeft:6,
    fontWeight: 'bold',
    fontSize: 16,
    
   },
});
