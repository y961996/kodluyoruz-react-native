import React from 'react';
import {View, ScrollView, Text, Image} from 'react-native';

import styles from './MealDetailCard.style';

const MealDetailCard = ({meal}) => {
  const currentMeal = meal[0];
  //{currentMeal.strYoutube}
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{uri: currentMeal.strMealThumb}} />
      <View style={styles.header_container}>
        <Text style={styles.meal}>{currentMeal.strMeal}</Text>
        <Text style={styles.area}>{currentMeal.strArea}</Text>
      </View>
      <View style={styles.horizontal_line} />
      <View style={styles.body_container}>
        <Text style={styles.instructions}>{currentMeal.strInstructions}</Text>
        <Text style={styles.youtube}>Watch On Youtube</Text>
      </View>
    </ScrollView>
  );
};

export default MealDetailCard;
