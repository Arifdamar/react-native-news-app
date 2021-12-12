import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InShortTabs from "./components/InShortTabs";

export default function App() {
  return (
    <View style={styles.container}>
      <InShortTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
