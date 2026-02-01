import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import IssuesList from '../../../components/IssuesList'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import styles from '../../../styles/academicIssue'

const acadIssues = () => {
  const [acadIssues, setAcadIssues] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchAcadIssues();
  }, []);

  const fetchAcadIssues = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://grievly.onrender.com/issue/sort/?category=academic');
      const result = await response.json();

      setAcadIssues(result);
      
    } catch (error) {
      console.log('Error fetching pending issues:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.badge}>
  <Text style={styles.badgeText}>Academic Issues</Text>
  <TouchableOpacity onPress={()=>{router.back()}}><Ionicons name="close"/></TouchableOpacity>
</View>


      {loading ? (
        <Text style={styles.loading}>Loading Academic issues...</Text>
      ) : (
        <IssuesList data={acadIssues} />
        
      )}
    </View>
  )
}

export default acadIssues;
