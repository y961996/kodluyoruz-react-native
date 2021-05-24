import React from 'react';
import {View, TextInput, Button} from 'react-native';

import TodoButton from '../TodoButton/TodoButton';

import styles from './AddItemCard.styles';

const AddItemCard = ({onButtonAction}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.search_box}
        placeholder="Yapılacak..."
        placeholderTextColor="#828282"
      />
      <TodoButton />
    </View>
  );
};

export default AddItemCard;
