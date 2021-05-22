import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Card from './components/Card';

//function App() {
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Card title="Guci Genk" text="Dincırısı mincirısım. Nincırıstır." />
      <Card title="Sid" text="Sincırısı mincirısım. Sincırıstır." />
      <Card title="Ratatuy" text="Herkes yemek yapabilir!" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
});

export default App;
