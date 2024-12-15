import {StyleSheet,Text,View,SafeAreaView,Image,KeyboardAvoidingView,TextInput, Pressable} from 'react-native';
import React, {useState} from 'react';
import {AntDesign, MaterialIcons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "white", alignItems: "center"}}>
            <View>
                <Image
                style={{marginTop:40}}
                    source={require('../assets/logo.jpg')}
                />
            </View>
            <KeyboardAvoidingView>
                <View>
                    <Text style={{fontSize:17, fontWeight:"bold",marginTop:12,color:"#041E42",alignSelf:"center"}}>Login to your Account</Text>
                </View>

                <View style={{marginTop: 50}}>
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
                            style={{color:"gray", marginVertical:10,width:300,fontSize:email ? 16 : 16}}
                            placeholder={"Enter Email"}/>
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
                            placeholder={"Enter your Password"}/>
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
                    backgroundColor: "#1843a2",
                    borderRadius:6,
                    marginLeft:"auto",
                    marginRight:"auto",
                    padding:15
                }}>
                    <Text style={{
                        textAlign:"center",
                        color:"white",fontSize:16,fontWeight:"bold",
                        }}>Login</Text>
                </Pressable>

                <Pressable onPress={() => navigation.navigate("RegisterScreen")} style={{marginTop:15}}>
                    <Text style={{textAlign:"center", marginTop:15, fontSize:16}}>Don't have an account <Text style={{color:"gray"}}>Register</Text></Text>
                </Pressable>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
};

export default LoginScreen;

const styles = StyleSheet.create({
    
});