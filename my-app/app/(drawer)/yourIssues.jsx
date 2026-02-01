import { View, Text, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { style } from '../../styles/style'
import IssueBox from '../../components/issueBox.jsx';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

const yourIssues = () => {
  const [isDataAvailable,setIsDataAvailable] = useState(true);
  const [issue,setIssue] = useState(""); 

  useEffect(()=>{

     const fetchIssueDetails = async () => {
    try {
    const token = await AsyncStorage.getItem("token");

    if (!token) {
      Alert.alert("Error", "User not authenticated");
      return;
    }
  const data = await axios.get(
  "http://grievly.onrender.com/issue/myissue",
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);
      setIssue(data?.data?.data);
      setIsDataAvailable(data?.data?.data?.length>0);
    } catch (error) {
      console.log("Error fetching issue:", error);
    } 
  };
  fetchIssueDetails();
  },[]) ;

  return (
    <View>
      <Text style={style.card}>Your Issues</Text>
      {isDataAvailable ? (
        
        <FlatList
          data={issue}
          renderItem={({ item }) => (
            <Pressable onPress={()=>{router.push(`/${item._id}`);
            }}>
            <IssueBox
              issueText={item.title}
              imageUrl={item.imgUrl || "https://placehold.net/default.png"}
              date={item.createdAt}
              status={item.status}
            />
            </Pressable>
          )}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => (
            <View style={{ height: 10, backgroundColor: "#eceaebff" }} />
          )}
          onEndReachedThreshold={0.8}
        ></FlatList>
      ) : (
        <Text style={style.noIssues}> No Issues Exists</Text>
      )}
    </View>
  )
}

export default yourIssues;