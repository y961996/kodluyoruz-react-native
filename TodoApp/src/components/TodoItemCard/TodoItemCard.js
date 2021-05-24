import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './TodoItemCard.styles';

const TodoItemCard = ({todo, handleTodoDisable, handleHoldDeletTodoItem}) => {
  const [cardTextDecoration, setCardTextDecoration] = useState('none');
  const [todoItemTextColor, setTodoItemTextColor] = useState('white');
  const [cardColor, setCardColor] = useState('#7da453');

  const toggleTodoItemTextDecoration = () => {
    if (cardTextDecoration === 'none') {
      setCardTextDecoration('line-through');
      setCardColor('#36474f');
      setTodoItemTextColor('#7d837e');
      todo.done = true;
      handleTodoDisable();
    } else {
      setCardTextDecoration('none');
      setCardColor('#7da453');
      setTodoItemTextColor('white');
      todo.done = false;
      handleTodoDisable();
    }
  };

  const handleHoldDelete = () => {
    const id = todo.id;
    handleHoldDeletTodoItem(id);
  };

  return (
    <View style={[styles.container, {backgroundColor: cardColor}]}>
      <TouchableOpacity
        onPress={toggleTodoItemTextDecoration}
        onLongPress={handleHoldDelete}>
        <Text
          style={[
            styles.todo_item_text,
            {textDecorationLine: cardTextDecoration},
            {color: todoItemTextColor},
          ]}>
          {todo.val}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoItemCard;
