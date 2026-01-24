import {  Alert, Text, TextInput, TouchableOpacity, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import {Link} from "expo-router";
import axios from "axios";
import {style} from "../../styles/style";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";


const Login=()=>{
const ipAddress="192.168.1.7";

const router=useRouter();
useEffect(()=>{
  const istoken=async function(){
  const tokenInfo= await AsyncStorage.getItem("token");
  if(tokenInfo){
    router.replace("/");
  }
}
istoken();
},[]);


const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [failedmsg,setFailedmsg]=useState("");

const handleLogin=async ()=>{
  try{
    setFailedmsg("");
    const response= await axios.post(`https://grievly.onrender.com/login`,
      {email:email,password:password}
    );

    if(response?.data?.success){
      await AsyncStorage.setItem("token",response.data?.token);
      await AsyncStorage.setItem("name",response.data.username);
      console.log(response.data.username);
      router.replace('/')
    }
    else
      setFailedmsg(response?.data?.message || "Login Failed!");

  }catch(err){
  console.log(err.message);
  setFailedmsg(err?.response?.data?.message || "Incorrect Credentials!");
 }
};

  return(
    <View style={style.container}>
      <View style={style.loginBox}>
       <View style={style.loginTextBox}><Text style={style.loginText}>LOGIN</Text></View>

      <View style={style.textBoxes}>
      <TextInput style={style.email} value={email} onChangeText={setEmail} placeholder=" Email Address"></TextInput>
      <TextInput style={style.password}  value={password} onChangeText={setPassword} placeholder=" Password" secureTextEntry></TextInput>
      </View>

      <View><TouchableOpacity><Text style={style.forgotText} onPress={()=>{Alert.alert("This feature is unavailable ❗")}}>Forgot password?</Text></TouchableOpacity></View>
      {failedmsg? <Text style={{ color: "red" }} >{failedmsg}</Text> :null}
      
      <TouchableOpacity onPress={handleLogin}>
        <LinearGradient
        colors={["#3338aaff", "#bdc5e7ff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={style.login} >
          
        <Text style={style.buttonText}>Login </Text>
       </LinearGradient>
      </TouchableOpacity>

      <View style={style.optionBox}>
        <View style={style.fixTextIssue}>
        <Text style={style.ismember}>Not a member?</Text>
        </View>
        <View>
          <Link push href={'/signup'} asChild><TouchableOpacity ><Text style={style.forgotText}>Signup now</Text></TouchableOpacity>
        </Link></View>
      </View>

      </View>
    </View>
  )
}
export default Login;