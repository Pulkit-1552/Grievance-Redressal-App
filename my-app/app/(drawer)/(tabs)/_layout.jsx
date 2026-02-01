import { router, Tabs } from "expo-router";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import styles from "../../../styles/styles.js";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      {/* Home */}
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={26}
              color={focused ? "#2f2e2e" : "#999"}
            />
          ),
        }}
      />
      
        <Tabs.Screen
         name="notification"
         options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "notifications" : "notifications-outline"}
              size={26}
              color={focused ? "#2f2e2e" : "#999"}
            />
          ),
        }}
         />

      {/* CENTER TAB (Raise Issue) */}
      <Tabs.Screen
        name="raiseIssue"
        options={{
          tabBarButton: (props) => (
            <TouchableOpacity
               onPress={() => router.push('addIssue')}
              activeOpacity={0.85}
              style={styles.centerButton}
            >
              <Ionicons name="add" size={30} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />

 <Tabs.Screen
        name="marked"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "bookmark" : "bookmark-outline"}
              size={26}
              color={focused ? "#2f2e2e" : "#999"}
            />
          ),
        }}
      />
      {/* Profile */}
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={26}
              color={focused ? "#2f2e2e" : "#999"}
            />
          ),
        }}
      />
    </Tabs>
  );
}