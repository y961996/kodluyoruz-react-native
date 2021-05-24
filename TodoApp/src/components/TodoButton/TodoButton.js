import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './TodoButton.styles';

const TodoButton = ({buttonAction, buttonColor, buttonDisable}) => {
  return (
    <View style={[styles.container, {backgroundColor: buttonColor}]}>
      <TouchableOpacity
        style={styles.container}
        onPress={buttonAction}
        disabled={buttonDisable}>
        <Text style={styles.button_text}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoButton;
