import { View ,Text} from "react-native";

const Badge = ({ label }) => (
  <View
    style={{
      paddingHorizontal: 12,
      paddingVertical: 6,
      backgroundColor: "#E3E7FD",
      borderRadius: 20,
      marginRight: 8,
      
    }}
  >
    <Text style={{ fontSize: 12, fontWeight: "600", color: "#3B5BDB" }}>
      {label?.toUpperCase()}
    </Text>
  </View>
);
export default Badge;