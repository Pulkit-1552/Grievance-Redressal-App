import { StyleSheet } from "react-native";

const acadStyles = StyleSheet.create({
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
  badge: {
  alignSelf: 'flex-start',
  backgroundColor: '#E0E7FF',
  paddingHorizontal: 14,
  paddingVertical: 6,
  borderRadius: 20,
  marginBottom: 12,
  flexDirection:"row"
},
badgeText: {
  fontSize: 14,
  fontWeight: '600',
  color: '#4338CA',
},

});
export default acadStyles;