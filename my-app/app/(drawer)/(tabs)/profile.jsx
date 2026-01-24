
import { style } from "../../../styles/style.js";
import { View, Text, ScrollView, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

export default function Logout() {
  const router=useRouter();

  const handleLogout = async () => {
    await AsyncStorage.removeItem("token");
    router.replace("/login");
  };

  return (
    <ScrollView contentContainerStyle={style.containerAbout}>
      
      <View style={style.headerAbout}>
        <Text style={style.titleAbout}>Logout</Text>
        <Text style={style.subtitle}>
          Are you sure you want to log out?
        </Text>
      </View>

      <View style={style.card}>
        <Text style={style.headingAbout}>Confirm Logout</Text>

        <Text style={style.textAbout}>
          Logging out will end your current session and you will need to log in
          again to access your account.
        </Text>

        <Pressable
          onPress={handleLogout}
          style={{ marginTop: 12 }}
        >
          <Text
            style={[
              style.textAbout,
              { color: "#DC2626", fontWeight: "600" },
            ]}
          >
            Logout
          </Text>
        </Pressable>

        <Pressable onPress={() => router.back()}>
          <Text
            style={[
              style.textAbout,
              { color: "#2563EB", marginTop: 8 },
            ]}
          >
            Cancel
          </Text>
        </Pressable>
      </View>

      <Text style={style.footerAbout}>
        © 2025 Grievance App. All rights reserved.
      </Text>

    </ScrollView>
  );
}
