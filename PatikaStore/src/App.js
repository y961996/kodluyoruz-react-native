import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, TextInput} from 'react-native';
const App = () => {
  const [val, setVal] = useState('');
  const textChange = queryText => {
    setVal(queryText);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={val}
          onChangeText={textChange}
          placeholder="Ara..."
          style={styles.search_box}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  search_box: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    margin: 10,
    borderRadius: 10,
  },
});

export default App;
