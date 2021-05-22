import React from 'react';
import {SafeAreaView, StyleSheet, FlatList, Text} from 'react-native';

import StoreSearchBar from './components/StoreSearchBar';
import store_data from './store_data.json';

const App = () => {
  const renderItems = ({item}) => {
    console.log(item);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>PATIKASTORE</Text>
      <FlatList
        ListHeaderComponent={() => <StoreSearchBar />}
        data={store_data}
        renderItem={renderItems}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'purple',
    margin: 10,
    marginBottom: 3,
  },
});

export default App;
