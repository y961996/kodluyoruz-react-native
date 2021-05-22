import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import StoreSearchBar from './components/StoreSearchBar';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StoreSearchBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
