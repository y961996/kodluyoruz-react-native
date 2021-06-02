import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';

import styles from './MealCard.style';

const MealCard = ({meal}) => {
  return (
    <TouchableWithoutFeedback>
      <View>
        <Image style={styles.image} source={{uri: meal.strMealThumb}} />
        <Text>{meal.strMeal}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MealCard;
