import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const HelpAndSupport = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Help & Support</Text>

      <Text style={styles.description}>
        Need help? We’re here for you.
      </Text>

      <Text style={styles.message}>
        If you face any issues or have questions while using the app,
        our support team is always ready to assist you.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>📩 Contact Support</Text>
        <Text style={styles.cardText}>
          Email us at: pulkit1552@gmail.com
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🛠️ Feature Requests</Text>
        <Text style={styles.cardText}>
          Have an idea or suggestion? We’d love to hear it and improve the app
          for you.
        </Text>
      </View>

      <Text style={styles.footer}>
        Thank you for using my app 💙
      </Text>
    </View>
  )
}

export default HelpAndSupport

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9FAFB',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
    color: '#111827',
  },
  description: {
    fontSize: 16,
    fontWeight: '500',
    color: '#374151',
    marginBottom: 12,
  },
  message: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
    color: '#1F2937',
  },
  cardText: {
    fontSize: 14,
    color: '#4B5563',
  },
  footer: {
    marginTop: 20,
    fontSize: 13,
    textAlign: 'center',
    color: '#9CA3AF',
  },
})
