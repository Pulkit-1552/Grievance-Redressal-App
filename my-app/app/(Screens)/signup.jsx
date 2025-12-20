import {  Text, TextInput, TouchableOpacity, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient";
import {style} from "../../styles/style";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";


const  signUp=()=>{

  const router=useRouter();

useEffect(()=>{
  const istoken=async function(){
  const tokenInfo= await AsyncStorage.getItem("token");
  if(tokenInfo){
    router.replace("/");
  }
}
// AsyncStorage.clear();
istoken();
},[]);
  const [email,setEmail]=useState("");
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [failedmsg,setFailedmsg]=useState("");

const handleLogin=async ()=>{
  try{
    setFailedmsg("");
    const response= await axios.post("http://172.16.4.25:8080/signup", //192.168.1.7
      {email,password,username}
    );

    if(response?.data?.success){
      await AsyncStorage.setItem("token",response.data?.token);
      await AsyncStorage.setItem("name",response.data.data.username);
      router.replace('/');
    }
    else
      setFailedmsg(response?.data?.message || "Login Failed!");

  }catch(err){
  setFailedmsg(err?.response?.data?.message || "Incorrect Credentials!");
 }
}

    const backtologin=()=>{
        router.back();
    }
  return(
    <View style={style.container}>
      <View style={style.loginBox}>
       <View style={style.loginTextBox}><Text style={style.loginText}>Signup </Text></View>

      <View style={style.textBoxes}>
      <TextInput style={style.email} placeholder=" Username" onChangeText={setUsername}></TextInput>
      <TextInput style={style.email}  placeholder=" Email Address" onChangeText={(text)=>setEmail(text)}/>
      <TextInput style={style.password} placeholder=" Password"  onChangeText={(text)=>setPassword(text)} secureTextEntry></TextInput>
      </View>
    {failedmsg? <Text style={failedmsg}>{failedmsg}</Text>:null}
      <TouchableOpacity onPress={handleLogin}>
        <LinearGradient
        colors={["#3338aaff", "#bdc5e7ff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={style.login} >
          
        <Text style={style.buttonText}>Signup </Text>
       </LinearGradient>
      </TouchableOpacity>

      <View style={style.optionBox}>
        <View style={style.fixTextIssue}>
        <Text style={style.ismember}>Already a user?</Text>
        </View>
        <View>
          <TouchableOpacity onPress={backtologin}><Text style={style.forgotText}>Login</Text></TouchableOpacity>
        </View>
      </View>

      </View>
    </View>
  )
}
export default signUp;