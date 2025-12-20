import {View,Text, TouchableOpacity, Alert} from "react-native";
import { style } from "../../styles/style.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import  {useRouter}  from "expo-router";

export default function App() {
 const router=useRouter();

  return (
    <View>
       <TouchableOpacity style={style.logoutButton}
        onPress={async()=>{
          await AsyncStorage.clear();
          router.replace("/login");
          Alert.alert("❕ Logged out")
          }}>
              <Text style={{ fontSize: 16, width: 80 }}>logout</Text>
            </TouchableOpacity>
    </View>
  );
}