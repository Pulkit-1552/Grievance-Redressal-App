import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import styles from '../../../styles/notification';

const Notifications = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <Text style={styles.message}>
        🚧 This feature is currently under development.
      </Text>
      <Text style={styles.subMessage}>
        We’re working hard to bring you real-time updates and important alerts.
        Stay tuned - notifications will be available in a future update!
      </Text>
    </View>
  )
}

export default Notifications ;
