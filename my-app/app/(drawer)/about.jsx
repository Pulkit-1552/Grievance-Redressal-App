import { View, Text, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import { style } from "../../styles/style.js";

export default function About() {
  return (
    <ScrollView contentContainerStyle={style.containerAbout}>
      
      <LinearGradient
        colors={["#DBEAFE", "#BFDBFE", "#93C5FD"]}
        style={style.headerAbout}
      >
        <FontAwesome name="info-circle" size={48} color="#222222" />
        <Text style={style.titleAbout}>About Us</Text>
        <Text style={style.subtitle}>
          Empowering students through transparent grievance handling
        </Text>
      </LinearGradient>

      <View style={style.card}>
        <Text style={style.headingAbout}>Who We Are</Text>
        <Text style={style.textAbout}>
          Our Grievance Redressal App is designed to provide students with a
          secure, transparent, and efficient platform to raise concerns and
          track their resolution. We aim to bridge the gap between students and
          authorities.
        </Text>
      </View>

      <View style={style.card}>
        <Text style={style.headingAbout}>Our Mission</Text>
        <Text style={style.textAbout}>
          To ensure that every grievance is heard, acknowledged, and resolved
          fairly within a defined timeline.
        </Text>
      </View>

      <View style={style.card}>
        <Text style={style.headingAbout}>Why Choose Us?</Text>
        <Text style={style.textAbout}>• Simple & user-friendly interface</Text>
        <Text style={style.textAbout}>• Transparent grievance tracking</Text>
        <Text style={style.textAbout}>• Faster communication</Text>
        <Text style={style.textAbout}>• Secure data handling</Text>
      </View>

      <Text style={style.footerAbout}>
        © 2025 Grievance App. All rights reserved.
      </Text>

    </ScrollView>
  );
}
