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
import Data from "../../constants/data.js";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import LineSeparator from "../../components/lineSeparator.jsx";
import { useRouter } from "expo-router";

export default function App() {
  const router = useRouter();

  const openAddIssueScreen = () => {
    router.push("/addIssue");
  };

  const [name, setName] = useState("");

  useEffect(() => {
    const fetchUsername = async () => {
      const storedName = await AsyncStorage.getItem("name");
      setName(storedName);
    };

    fetchUsername();
  }, []);

  return (
    <SafeAreaView>
      <Text style={style.welcomeText}>Welcome {name} !</Text>

      <View
        style={style.addIssueButton}
      >
        <TouchableOpacity onPress={openAddIssueScreen}>
          <Text style={{ fontSize: 30 }}>
            <FontAwesome name="plus" size={45} color="#f09030ff" />
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={Data}
        renderItem={({ item }) => (
          <IssueBox
            issueText={item.title}
            imageUrl="https://placehold.net/default.png"
            date={item.createdOn}
            status={item.status}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => (
          <View style={{ height: 10, backgroundColor: "#eceaebff" }} />
        )}
        onEndReachedThreshold={0.8}
        ListFooterComponent={() => (
          <View style={style.footer}>
            <View style={style.parentBox}>
              <Text style={style.rightsBox}>
                <FontAwesome name="copyright" size={16} color="#ffffff" />
                All rights reserved
              </Text>

              <View style={style.icons}>
                <FontAwesome name="send" size={10} color="#ffffff" />
                <Text style={{ fontSize: 12, color: "#ffffff" }}>
                  Contact Us :{" "}
                </Text>
                <FontAwesome name="instagram" size={16} color="#ffffff" />
                <FontAwesome name="whatsapp" size={16} color="#ffffff" />
                <FontAwesome name="telegram" size={16} color="#ffffff" />
                <FontAwesome name="youtube" size={16} color="#ffffff" />
              </View>
            </View>
          </View>
        )}
      ></FlatList>
    </SafeAreaView>
  );
}
