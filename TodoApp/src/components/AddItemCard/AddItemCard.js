import React from 'react';
import {View, TextInput} from 'react-native';

import TodoButton from '../TodoButton/TodoButton';

import styles from './AddItemCard.styles';

const AddItemCard = ({
  onButtonAction,
  onInputChange,
  buttonColor,
  buttonDisable,
  currentInput,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.search_box}
        placeholder="Yapılacak..."
        placeholderTextColor="#828282"
        value={currentInput}
        onChangeText={onInputChange}
      />
      <View style={styles.horizontal_line} />
      <TodoButton
        buttonAction={onButtonAction}
        buttonColor={buttonColor}
        buttonDisable={buttonDisable}
      />
    </View>
  );
};

export default AddItemCard;
