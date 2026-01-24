
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useEffect, useState } from "react";
import IssueBox from "../../components/issueBox.jsx";
import { style } from "../../styles/style.js";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import axios from 'axios';
import { useFocusEffect } from "expo-router";
import { useCallback } from "react";
import PageFooter from "../../components/pageFooter.jsx";


export default function App() {
  const router = useRouter();

  const openAddIssueScreen = () => {
    router.push("/addIssue");
  };

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
    setData(Data?.data?.data);
    if(data.length) setIsDataAvailable(true);

    };
    getIssues();
 
  useFocusEffect(
  useCallback(() => {getIssues();
  }, [])
);

  return (
    <SafeAreaView style={{flex:1,marginHorizontal:5}}>
      
      <Text style={style.welcomeText}>Welcome {name} !</Text>

      <View
        style={style.addIssueButton}
      >
        <TouchableOpacity onPress={openAddIssueScreen}>
          <Text style={{ opacity : 0.8 }}>
            <FontAwesome name="plus" size={45} color="#222222" />
          </Text>
        </TouchableOpacity>
      </View>

      { isDataAvailable ? (<FlatList
        data={data}
        renderItem={({ item }) => (
          <IssueBox
            issueText={item.title}
            imageUrl={item.imgUrl || "https://placehold.net/default.png"}
            date={item.createdAt}
            status={item.status}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => (
          <View style={{ height: 10, backgroundColor: "#eceaebff" }} />
        )}
        onEndReachedThreshold={0.8}
        ListFooterComponent={() => <PageFooter/>}
      ></FlatList>) : <Text style={style.noIssues}> No Issues Exists</Text>}
    </SafeAreaView>
  );
}
