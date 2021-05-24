import React from 'react';
import {View, Text} from 'react-native';

import styles from './TodoItemCard.styles';

const TodoItemCard = ({todo}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.todo_item_text}>{todo}</Text>
    </View>
  );
};

export default TodoItemCard;
