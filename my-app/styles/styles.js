import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F7FF",
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
    alignItems: "center",
  },

  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },

  hello: {
    fontSize: 18,
    color: "#666",
    marginTop: 25,
  },

  name: {
    fontSize: 26,
    fontWeight: "700",
    color: "#111",
  },

  tabs: {
    flexDirection: "row",
    marginTop: 25,
  },

  activeTab: {
    fontWeight: "600",
    color: "#5B5FFF",
    marginRight: 20,
  },

  inactiveTab: {
    color: "#999",
    marginRight: 20,
  },

  categoryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },

  categoryTitle: {
    fontSize: 18,
    fontWeight: "600",
  },

  seeAll: {
    color: "#999",
  },

  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
  },

  card: {
    height: 150,
    borderRadius: 22,
    padding: 16,
    justifyContent: "flex-end",
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
  },

  cardSubtitle: {
    fontSize: 13,
    color: "#555",
    marginTop: 4,
  },

   tabBar: {
    height: 70,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    elevation: 15,
  },

  centerButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#0e3350",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -25,
    elevation: 10,
  }
});

export default styles;




 