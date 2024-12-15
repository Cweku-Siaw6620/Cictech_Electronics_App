import {Image, Alert, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {AntDesign, MaterialIcons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import axios from "axios";

const RegisterScreen = () => {
    const [username, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber]= useState("");
    const [email, setEmail]= useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();
    
    const handleSignUp = async() => {
      
                const url = "https://cictech-api-rc4r.onrender.com/users";
                let result = await fetch(url,{
                    method:"POST",
                    headers:{"Content-Type":"application/json"},
                    body: JSON.stringify({username:username,email:email,phoneNumber:phoneNumber,password:password})
                });
                result = await result.json();
               /* if(result.status==201){
                   Alert.alert('Data is saved,')
                }else {
                    Alert.alert("Error", "Registration failed!");
                  }*/
                  navigation.navigate('ProfilePicture', { username });
            }
    
    

    return (
      <SafeAreaView style={{flex: 1, backgroundColor: "white", alignItems: "center"}}>
             <View>
                <Image
                style={{ marginTop: 30}}
                    source={require("../assets/logo.jpg")}
                />
            </View>

            <ScrollView>
{/*Full Name*/}
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

{/*Email*/}
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
                            color:"gray"}} name={"mail"} size={24} color={"black"}/>
                        <TextInput
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            style={{
                                color:"gray",
                                marginVertical:10,
                                width:300,
                                fontSize:email ? 16 : 16}}
                            placeholder={"Email"}/>
                    </View>
                </View>

{/*Phone Number*/}
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
                            onChangeText={(text) => setPhoneNumber(text)}
                            style={{
                                color:"gray",
                                marginVertical:10,
                                width:300,
                                fontSize:phoneNumber ? 16 : 16}}
                            maxLength={10}
                            placeholder={"Contact"}/>
                    </View>
                </View>

{/*Password*/}
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

const styles = StyleSheet.create({})
