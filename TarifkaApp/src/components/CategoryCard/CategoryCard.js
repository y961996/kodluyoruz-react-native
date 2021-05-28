import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './CategoryCard.style';

const CategoryCard = ({product}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: product.strCategoryThumb}} />
      <Text style={styles.category_text}>{product.strCategory}</Text>
    </View>
  );
};

export default CategoryCard;
