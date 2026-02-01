import {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Badge from "../../../components/Badge";

export default function IssueDetailsScreen() {
  const { id } = useLocalSearchParams();

  const [issue, setIssue] = useState(null);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (id) fetchIssueDetails();
  }, [id]);

  const fetchIssueDetails = async () => {
    try {
      const res = await fetch(
        `http://grievly.onrender.com/issue/issuedetails/${id}`
      );
      const data = await res.json();
      setIssue(data?.data);
    } catch (error) {
      console.log("Error fetching issue:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsername();
  }, []);

  const getUsername = async () => {
    try {
      const storedName = await AsyncStorage.getItem("name");
      if (storedName) {
        setUsername(storedName);
      }
    } catch (error) {
      console.log("Error getting username:", error);
    }
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!issue) {
    return (
      <View style={{ padding: 20 }}>
        <Text>Issue not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ backgroundColor: "#F5F6FA" }}>
 
      <Image
        source={{ uri: issue.imgUrl || "https://placehold.co/600x400" }}
        style={{ width: "100%", height: 220 }}
      />

      <View style={{ padding: 16 }}>

        <Text style={{ fontSize: 24, fontWeight: "700", marginBottom: 8 }}>
          {issue.title}
        </Text>

        <View style={{ flexDirection: "row", marginBottom: 16 }}>
          <Badge label={issue.status} />
          <Badge label={issue.urgency} />
        </View>

        <View style={styles.card}>
          <InfoRow label="Category" value={issue.category} />
          <InfoRow label="Department" value={issue.department} />
          <InfoRow
            label="Reported By"
            value={
              issue.isAnonymous
                ? "Anonymous"
                : username || "Anonymous"
            }
          />
          <InfoRow
            label="Created On"
            value={new Date(issue.createdAt).toDateString()}
          />
        </View>

        <View style={[styles.card, { marginTop: 16 }]}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.descriptionText}>
            {issue.description}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}


const InfoRow = ({ label, value }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 10,
    }}
  > 
    <Text style={{ color: "#555" ,width:100}}>{label}</Text>
    <Text style={{ fontWeight: "600" }}>{value}</Text>
  </View>
);

const styles = {
  card: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 16,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 15,
    lineHeight: 22,
    color: "#333",
  },
};
