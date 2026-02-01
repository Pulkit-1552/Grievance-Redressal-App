
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
  Pressable,
} from "react-native";
import { useEffect, useState } from "react";
import IssueBox from "../../components/issueBox.jsx";
import { style } from "../../styles/style.js";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import axios from 'axios';
import { useFocusEffect } from "expo-router";
import { useCallback } from "react";
import PageFooter from "../../components/pageFooter.jsx";
import styles from "../../styles/styles.js";
import { Ionicons } from "@expo/vector-icons";


export default function App() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [data,setData] =useState([]);
  const [isDataAvailable,setIsDataAvailable]=useState(false);

  useEffect(() => {
    const fetchUsername = async () => {
      const storedName = await AsyncStorage.getItem("name");
      setName(storedName);
    };

    fetchUsername();
  }, []);

    const getIssues= async ()=>{
    const Data=await axios.get(`https://grievly.onrender.com/issue/`);
    const res=Data?.data?.data;
    setData(res || []);
    setIsDataAvailable(res.length>0);
    };
    
  useFocusEffect(
  useCallback(() => {getIssues();
  }, [])
);

  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 5 }}>
      <Text style={style.welcomeText}>Welcome {name} !</Text>

      <View style={style.addIssueButton}>
        <TouchableOpacity
          onPress={() => router.push("addIssue")}
          activeOpacity={0.85}
          style={styles.centerButton}
        >
          <Ionicons name="add" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

     {isDataAvailable ? (
        <FlatList
          data={data}
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
          ListFooterComponent={() => <PageFooter />}
        ></FlatList>
      ) : (
        <Text style={style.noIssues}> No Issues Exists</Text>
      )}
    </SafeAreaView>
  );
}
