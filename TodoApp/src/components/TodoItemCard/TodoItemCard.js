import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './TodoItemCard.styles';

const TodoItemCard = ({todo, handleToggleTodo}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleToggleTodo(todo)}>
        <Text style={styles.todo_item_text}>{todo.val}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoItemCard;
