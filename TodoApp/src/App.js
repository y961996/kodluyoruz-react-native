import React, {useState} from 'react';
import {SafeAreaView, View, Text, FlatList, StyleSheet} from 'react-native';

import AddItemCard from './components/AddItemCard/AddItemCard';
import TodoItemCard from './components/TodoItemCard/TodoItemCard';

const App = () => {
  const [todoList, setTodoList] = useState([]);

  const addTodoItem = () => {};
  const renderTodo = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.todo_item_container}>
        <Text style={styles.headertext}>Yapılacaklar 2</Text>
        <FlatList
          data={todoList}
          keyExtractor={index => index.toString()}
          renderItem={renderTodo}
        />
      </View>
      <View style={styles.add_item_container}>
        <AddItemCard onButtonAction={addTodoItem} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f2027',
  },
  todo_item_container: {
    flex: 1,
  },
  add_item_container: {
    margin: 20,
  },
  headertext: {
    color: '#ffa206',
  },
});

export default App;
