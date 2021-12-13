import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import NewsContext from "./API/Context";
import InShortTabs from "./components/InShortTabs";

function App() {
  return (
    <View style={{ ...styles.container, backgroundColor: "#282C35" }}>
      <InShortTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});

export default () => {
  return (
    <NewsContext>
      <App />
    </NewsContext>
  );
};