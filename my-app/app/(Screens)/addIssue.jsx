import { View, Text, Switch, TouchableOpacity, ScrollView, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import InputBox from "../../components/inputBox.jsx";
import { style } from "../../styles/style.js";
import PickImage from "../../components/PickImage.jsx";


const AddIssue = () => {
  const [anonymous, setisAnonymous] = useState(false);
  const [urgency, setUrgency] = useState("low");
  const [category, setCategory] = useState("Academic");
  const [dept, setDept] = useState("Engineering");
  const [imageUrl, setImageUrl] = useState(null);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ margin: 15 }}>
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

      <InputBox text="Enter your name" />
      <InputBox text="Enter your roll number" />

      <InputBox text="Title" />
      <InputBox text="Description" />

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
        <Picker.item label="Low" value="Low" />
        <Picker.item label="Medium" value="Medium" />
        <Picker.item label="High" value="High" />
        <Picker.item label="Critical" value="Critical" />
      </Picker>

      <Text> Select Category: </Text>
      <Picker
        style={style.picker}
        onValueChange={setCategory}
        selectedValue={category}
      >
        <Picker.item label="Academic" value="Academic" backgroundColor="black" />
        <Picker.item label="Ragging" value="Ragging" />
        <Picker.item label="Facilities" value="Facilities" />
        <Picker.item label="Others" value="Others" />
      </Picker>

      <Text> Select Department: </Text>
      <Picker style={style.picker} selectedValue={dept} onValueChange={setDept}>
        <Picker.item label="Engineering" value="Engineering" />
        <Picker.item label="MBA" value="MBA" />
        <Picker.item label="Humanities" value="Humanities" />
        <Picker.item label="Others" value="Others" />
      </Picker>
      <TouchableOpacity style={style.submitButton} onPress={()=>{Alert.alert("✔ Issue published Successfully")}}>
        <Text style={{ fontSize: 16, width: 80 }}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>


  );
};

export default AddIssue;
