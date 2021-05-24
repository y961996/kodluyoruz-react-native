import React, {useState} from 'react';
import {SafeAreaView, View, Text, FlatList, StyleSheet} from 'react-native';

import AddItemCard from './components/AddItemCard/AddItemCard';
import TodoItemCard from './components/TodoItemCard/TodoItemCard';

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoListSize, setTodoListSize] = useState(0);
  const [todoButtonColor, setTodoButtonColor] = useState('#808080');
  const [todoButtonDisabled, setTodoButtonDisabled] = useState(true);
  const [currentInputText, setCurrentInputText] = useState('');

  const handleButtonDisable = () => {
    setTodoButtonColor('#808080');
    setTodoButtonDisabled(true);
  };

  const addTodoItem = () => {
    setTodoList([...todoList, currentInputText]);
    setTodoListSize(todoListSize + 1);
    setCurrentInputText('');
    handleButtonDisable();
  };
  const checkInput = text => {
    if (text.trim().length > 0) {
      setTodoButtonColor('#fea500');
      setTodoButtonDisabled(false);
    } else {
      handleButtonDisable();
    }
    setCurrentInputText(text);
  };
  const renderTodo = ({item}) => <TodoItemCard todo={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.todo_item_container}>
        <View style={styles.header_container}>
          <Text style={styles.headertext}>Yapılacaklar </Text>
          <Text style={styles.headerTodoCount}>{todoListSize}</Text>
        </View>
        <FlatList
          style={styles.todo_list}
          data={todoList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderTodo}
        />
      </View>
      <View style={styles.add_item_container}>
        <AddItemCard
          onButtonAction={addTodoItem}
          onInputChange={checkInput}
          buttonColor={todoButtonColor}
          buttonDisable={todoButtonDisabled}
          currentInput={currentInputText}
        />
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
    margin: 20,
  },
  todo_list: {
    flex: 1,
  },
  add_item_container: {
    margin: 20,
  },
  header_container: {
    flex: 1,
    flexDirection: 'row',
  },
  headertext: {
    flex: 1,
    color: '#ffa206',
    fontWeight: 'bold',
    fontSize: 38,
  },
  headerTodoCount: {
    color: '#ffa206',
    fontSize: 38,
  },
});

export default App;
