import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';

import styles from './MealCard.style';

const MealCard = ({meal, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: meal.strMealThumb}} />
        <View style={styles.bottom_container}>
          <Text style={styles.meal_text} numberOfLines={1}>
            {meal.strMeal}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MealCard;
