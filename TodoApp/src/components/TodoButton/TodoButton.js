import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './TodoButton.styles';

const TodoButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.container}>
        <Text style={styles.button_text}>Button</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoButton;
