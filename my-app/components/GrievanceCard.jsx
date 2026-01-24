import { Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../styles/styles.js";

export const GrievanceCard = ({ title, subtitle, colors, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.65}
      onPress={onPress}
      style={{ width: "47%", marginBottom: 15 }}
    >
      <LinearGradient colors={colors} style={styles.card}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardSubtitle}>{subtitle}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};