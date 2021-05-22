import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Hello World</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
  },
});

export default App;
