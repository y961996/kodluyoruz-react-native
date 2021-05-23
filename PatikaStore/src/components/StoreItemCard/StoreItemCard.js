import React from 'react';
import {View, Image, Text} from 'react-native';

import styles from './StoreItemCard.style';

const StoreItemCard = ({items}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: items.imgURL}} />
      <Text style={styles.titleText}>{items.title}</Text>
      <Text style={styles.priceText}>{items.price}</Text>
    </View>
  );
};

export default StoreItemCard;
