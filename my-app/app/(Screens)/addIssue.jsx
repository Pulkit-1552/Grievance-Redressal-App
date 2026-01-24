import { View, Text, Switch, TouchableOpacity, ScrollView, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import InputBox from "../../components/inputBox.jsx";
import { style } from "../../styles/style.js";
import PickImage from "../../components/PickImage.jsx";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";


const AddIssue = () => {

  const [anonymous, setisAnonymous] = useState(false);
  const [urgency, setUrgency] = useState("low");
  const [category, setCategory] = useState("academic");
  const [dept, setDept] = useState("engineering");
  const [imageUrl, setImageUrl] = useState(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

const handleSubmit = async () => {
  try {
    //const ipAddress = "192.168.1.7";
    const ipAddress = "10.246.209.242";

    const token = await AsyncStorage.getItem("token");

    if (!token) {
      Alert.alert("Error", "User not authenticated");
      return;
    }
    await axios.post(
      `https://grievly.onrender.com/issue/publish`,
      {
        isAnonymous:anonymous,
        urgency,
        category,
        department: dept,
        imgUrl: imageUrl,
        title,
        description: desc,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );


    Alert.alert("✔ Issue published successfully");
  } catch (error) {
    Alert.alert(
      "Error",
      error?.response?.data?.message || "Failed to publish issue"
    );
  }
};
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={style.scrollViewStyle}>
      <View style={style.anonymousButton}>
        <Text style={{ fontSize: 16, paddingLeft: 20 }}>
          Submit as anonymous
        </Text>
        <Switch
          trackColor={{ false: "#ffffff", true: "#656172ff" }}
          thumbColor={anonymous ? "#042535" : "#042535"}
          value={anonymous}
          onValueChange={setisAnonymous}
        ></Switch>
      </View>

      <InputBox heading='Title :' text="Give a title to your issue" setValue={(text)=>setTitle(text)}/>
      <InputBox heading ='Description :' text="Description your issue" setValue={(text)=>setDesc(text)} />

      <PickImage
        onUpload={(url) => {
          setImageUrl(url);
        }}
        isimageUploaded={imageUrl}
      />

      <Text> Select Urgency : </Text>
      <Picker
        style={style.picker}
        onValueChange={setUrgency}
        selectedValue={urgency}
      >
        <Picker.item label="Low" value="low" />
        <Picker.item label="Medium" value="medium" />
        <Picker.item label="High" value="high" />
        <Picker.item label="Critical" value="critical" />
      </Picker>

      <Text> Select Category: </Text>
      <Picker
        style={style.picker}
        onValueChange={setCategory}
        selectedValue={category}
      >
        <Picker.item label="Academic" value="academic" backgroundColor="black" />
        <Picker.item label="Ragging" value="ragging" />
        <Picker.item label="Facilities" value="facilities" />
        <Picker.item label="Others" value="others" />
      </Picker>

      <Text> Select Department: </Text>
      <Picker style={style.picker} selectedValue={dept} onValueChange={setDept}>
        <Picker.item label="Engineering" value="engineering" />
        <Picker.item label="MBA" value="mba" />
        <Picker.item label="Humanities" value="humanities" />
        <Picker.item label="Others" value="others" />
      </Picker>

      <TouchableOpacity style={style.submitButton} onPress={handleSubmit}>
        <Text style={style.submitText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>


  );
};

export default AddIssue;
