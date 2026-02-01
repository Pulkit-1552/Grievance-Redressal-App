import { StyleSheet } from "react-native";

 const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingTop: 30,
  },

  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },

  name: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111",
  },

  subText: {
    fontSize: 13,
    color: "#666",
    marginTop: 2,
  },

  divider: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: 25,
  },
});

export default profileStyles;
