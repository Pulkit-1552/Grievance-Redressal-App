import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import styles from "../../../styles/styles.js";
import { GrievanceCard } from "../../../components/GrievanceCard.jsx";
import { router } from "expo-router";

const HomeScreen = () => {
    
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      <Text style={styles.hello}>Welcome back,</Text>
      <Text style={styles.name}>Student 👋</Text>

      <View style={styles.tabs}>
        <TouchableOpacity onPress={()=>{router.push("displayIssues")}}><Text style={styles.activeTab}>All</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>{router.push("/pendingIssues")}}><Text style={styles.inactiveTab}>Pending</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>{router.push("displayIssues")}}><Text style={styles.inactiveTab}>In-Progress </Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>{router.push("displayIssues")}}><Text style={styles.inactiveTab}>Resolved</Text></TouchableOpacity>
      </View>

      <View style={styles.categoryHeader}>
        <Text style={styles.categoryTitle}>Grievance Categories</Text>
        <TouchableOpacity activeOpacity={0.5}>
          <Text style={styles.seeAll}>
            See all
          </Text>
        </TouchableOpacity>
      </View>


      <View style={styles.cardContainer}>
        <GrievanceCard
          title="Academic Issues"
          subtitle="Assignments, Exams"
          colors={["#E3F2FD", "#BBDEFB"]}
          onPress={() => router.push("/academicIssues")}
        />

        <GrievanceCard
          title="Hostel Issues"
          subtitle="Water, Rooms, Mess"
          colors={["#E8F5E9", "#C8E6C9"]}
          onPress={()=>{router.push("displayIssues")}}
        />

        <GrievanceCard
          title="Infrastructure"
          subtitle="Classrooms, Labs"
          colors={["#FFF3E0", "#FFE0B2"]}
          onPress={()=>{router.push("displayIssues")}}
        />

        <GrievanceCard
          title="Faculty Related"
          subtitle="Teaching, Behaviour"
          colors={["#FCE4EC", "#F8BBD0"]}
          onPress={()=>{router.push("displayIssues")}}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;