import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './TodoItemCard.styles';

const TodoItemCard = ({todo}) => {
  const [cardTextDecoration, setCardTextDecoration] = useState('none');
  const [todoItemTextColor, setTodoItemTextColor] = useState('white');
  const [cardColor, setCardColor] = useState('#7da453');

  const toggleTodoItemTextDecoration = () => {
    if (cardTextDecoration === 'none') {
      setCardTextDecoration('line-through');
      setCardColor('#36474f');
      setTodoItemTextColor('#7d837e');
    } else {
      setCardTextDecoration('none');
      setCardColor('#7da453');
      setTodoItemTextColor('white');
    }
  };

  return (
    <View style={[styles.container, {backgroundColor: cardColor}]}>
      <TouchableOpacity onPress={toggleTodoItemTextDecoration}>
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
