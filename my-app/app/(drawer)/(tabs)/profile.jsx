import styles from "../../../styles/profile";
import { Image, Text, View, StyleSheet } from "react-native";
import Logout from "../../../components/logoutUi";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Profile() {
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const storedName = await AsyncStorage.getItem("name");
        setName(storedName || "User");
      } catch (err) {
        console.log(err);
      }
    };
    fetchUsername();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.profileRow}>
        <Image
          source={{
            uri: "https://th.bing.com/th/id/OIP.ZlnrCst8FBcsJLF1doSrFQHaHa?w=192&h=192&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
          }}
          style={styles.avatar}
        />

        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.subText}>Logged in user</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <Logout />
    </View>
  );
}
