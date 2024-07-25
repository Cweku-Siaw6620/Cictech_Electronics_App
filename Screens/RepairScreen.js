import { StyleSheet, Text, View } from 'react-native';

export default function RepairScreen() {

  const getCurrentDate = () => {
    const date = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.dateText}>{getCurrentDate()}</Text>
      {/*Input Customer's name here */}
      <Text style={{fontSize:30,fontWeight:'bold'}}>Hello .......</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:30,
    marginLeft:5
  },
  dateText: {
    fontSize: 15,
    marginBottom: 20,
  },
});
