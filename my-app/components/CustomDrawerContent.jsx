import { View, Text, Image, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ paddingTop: 0 }}>
      
      <View style={styles.header}>
        <Image
          source={require("../assets/logo.png")}
          style={styles.image}
        />
        <Text style={styles.title}>Grievance App</Text>
        <Text style={styles.subtitle}>
          Empowering students through transparent grievance handling
        </Text>
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
