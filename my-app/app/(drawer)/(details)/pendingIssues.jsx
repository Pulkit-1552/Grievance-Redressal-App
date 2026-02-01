import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import IssuesList from '../../../components/IssuesList'
import { styles } from '../../../styles/pendingIssue';

const PendingIssues = () => {
  const [pendingIssues, setPendingIssues] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchPendingIssues();
  }, []);

  const fetchPendingIssues = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://grievly.onrender.com/issue/sort/?status=pending');
      const result = await response.json();

      setPendingIssues(result);
      
    } catch (error) {
      console.log('Error fetching pending issues:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pending Issues</Text>

      {loading ? (
        <Text style={styles.loading}>Loading pending issues...</Text>
      ) : (
        <IssuesList data={pendingIssues} />
        
      )}
    </View>
  )
}

export default PendingIssues;


