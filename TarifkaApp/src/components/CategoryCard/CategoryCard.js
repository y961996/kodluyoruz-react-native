import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';

import styles from './CategoryCard.style';

const CategoryCard = ({product, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: product.strCategoryThumb}} />
        <Text style={styles.category_text}>{product.strCategory}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoryCard;
