import * as ImagePicker from "expo-image-picker";
import uploadImage from "../utility/imageUpload";
import { Alert, TouchableOpacity,Text, ActivityIndicator } from "react-native";
import { style } from "../styles/style";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useState } from "react";


export default function PickImage({onUpload,isimageUploaded}){

  const [loading,setLoading] = useState(false);

  const imageUpload=async()=>{
  
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

  if (!permission.granted) {
    Alert.alert("Permission required to upload image");
    return;
  }

  const result = await ImagePicker.launchImageLibraryAsync({  //we get arr of objects in result herei.e why we selected asset feild in next steps
  mediaTypes: ImagePicker.MediaType, //or ["images"]
  allowsEditing: true,
  quality: 1,
});


  if (!result.canceled) {
    onUpload(null);
    setLoading(true);
   const url=await  uploadImage(result.assets[0].uri);
   onUpload(url);
   setLoading(false);
  }
}
  

  return (
    <TouchableOpacity onPress={imageUpload} style={style.addImageButton}>
      {isimageUploaded ? <FontAwesome name="check" size={16} color="#549e4cff" /> : (loading ? <ActivityIndicator/> : <FontAwesome name="plus" size={16} color="#281c53ff" />)}
      <Text>  Add image </Text>
    </TouchableOpacity>
  );
};
