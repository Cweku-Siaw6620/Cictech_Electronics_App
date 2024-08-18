import {Image, Alert, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {AntDesign, Ionicons, MaterialIcons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";

const RegisterScreen = () => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber]= useState();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword]= useState("");
    const navigation = useNavigation();
    
    const handleSignUp = () => {
        /*if(!name||!username||!phoneNumber||!password||!confirmPassword){
            Alert.alert('Fill all spaces', 'Please fill out all fields before submitting.');
          } 
       else*/ if (password !== confirmPassword) {
          Alert.alert('Error', 'Passwords do not match!');
        } else {
            navigation.navigate('ProfilePicture', { username });
          }
      };

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "white", alignItems: "center"}}>
            <View>
                <Image
                style={{ marginTop: 30}}
                    source={require("../assets/logo.jpg")}
                />
            </View>
            <ScrollView>
                <View>
                    <Text style={{fontSize:17, fontWeight:"bold",marginTop:12,color:"#041E42",alignSelf:"center"}}>Register a new Account</Text>
                </View>

                <View style={{marginTop: 30}}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap:5,
                            backgroundColor: "#D0D0D0D0",
                            paddingVertical: 5,
                            borderRadius:5,
                            marginTop:30
                        }}>
                        <Ionicons name={"person"}
                                  size={24}
                                  color={"gray"}
                                  style={{marginLeft: 8}}  />
                        <TextInput
                            value={name}
                            onChangeText={(text) => setName(text)}
                            style={{color:"gray",
                                marginVertical:10,
                                width:300,
                                fontSize:name ? 16 : 16}}
                            placeholder={"Enter your Full Name"}/>
                    </View>

                </View>

                <View style={{marginTop: 10}}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap:5,
                            backgroundColor: "#D0D0D0D0",
                            paddingVertical: 5,
                            borderRadius:5,
                            marginTop:30
                        }}>
                        <MaterialIcons style={{
                            marginLeft:8,
                            color:"gray"}} name={"person"} size={24} color={"black"}/>
                        <TextInput
                            value={username}
                            onChangeText={(text) => setUsername(text)}
                            style={{
                                color:"gray",
                                marginVertical:10,
                                width:300,
                                fontSize:username ? 16 : 16}}
                            placeholder={"Username"}/>
                    </View>
                </View>

                <View style={{marginTop: 10}}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap:5,
                            backgroundColor: "#D0D0D0D0",
                            paddingVertical: 5,
                            borderRadius:5,
                            marginTop:30
                        }}>
                        <MaterialIcons style={{
                            marginLeft:8,
                            color:"gray"}} name={"phone"} size={24} color={"black"}/>
                        <TextInput
                            value={phoneNumber}
                            onChangeText={(number) => setPhoneNumber(number)}
                            style={{
                                color:"gray",
                                marginVertical:10,
                                width:300,
                                fontSize:phoneNumber ? 16 : 16}}
                            maxLength={10}
                            placeholder={"Contact"}/>
                    </View>
                </View>

                <View style={{marginTop:10}}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap:5,
                            backgroundColor: "#D0D0D0D0",
                            paddingVertical: 5,
                            borderRadius:5,
                            marginTop:30
                        }}>
                        <AntDesign style={{marginLeft:8,
                            color:"gray"}} name={"lock1"} size={24} color={"gray"}/>
                        <TextInput
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            secureTextEntry={true}
                            style={{
                                color:"gray",
                                marginVertical:10,
                                width:300,
                                fontSize:password ? 16 : 16}}
                            placeholder={"Password"}/>
                    </View>
                </View>

                <View style={{marginTop:10}}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap:5,
                            backgroundColor: "#D0D0D0D0",
                            paddingVertical: 5,
                            borderRadius:5,
                            marginTop:30
                        }}>
                        <AntDesign style={{marginLeft:8,
                            color:"gray"}} name={"lock1"} size={24} color={"gray"}/>
                        <TextInput
                            value={confirmPassword}
                            onChangeText={(text) => setConfirmPassword(text)}
                            secureTextEntry={true}
                            style={{
                                color:"gray",
                                marginVertical:10,
                                width:300,
                                fontSize:confirmPassword ? 16 : 16}}
                            placeholder={"Confirm Password"}/>
                    </View>
                </View>

                <View style={{
                    marginTop:12,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent:"space-between"}}>
                    <Text>Keep me logged in</Text>

                    <Text style={{color:"#007FFF",fontWeight:"500"}}>Forgot Password</Text>
                </View>

                <View style={{marginTop:80}}/>

                <Pressable style={{width:200,
                    backgroundColor: "#0c4bd2",
                    borderRadius:6,
                    marginLeft:"auto",
                    marginRight:"auto",
                    padding:15
                }}
                onPress={handleSignUp}
                >
                    <Text style={{
                        textAlign:"center",
                        color:"white",fontSize:16,fontWeight:"bold",
                    }}>Register</Text>
                </Pressable>

                <Pressable onPress={() => navigation.goBack()} style={{marginTop:15}}>
                    <Text style={{textAlign:"center", marginTop:15, color:"gray", fontSize:16, marginBottom:15}}>Already have an account? Sign In</Text>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    )
};

export default RegisterScreen;

const styles = StyleSheet.create({});