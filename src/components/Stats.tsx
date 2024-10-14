import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../styles/Stats'

const Stats = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Text style={styles.title}>Stats</Text>
      </View>
    </SafeAreaView>
  )
}

export default Stats