import { StyleSheet } from "react-native";

const PendingIssue = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F9FAFB',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12,
    color: '#111827',
  },
  loading: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 20,
    color: '#6B7280',
  },
});
export default PendingIssue;