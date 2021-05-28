import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Config from 'react-native-config';

import useFetch from '../../hooks/useFetch';

import styles from './FoodCategory.style';

const FoodCategory = ({navigation}) => {
  console.log(Config);
  const {error, loading, data} = useFetch(Config.API_URL_CATEGORIES);

  return (
    <View>
      <Text>Categories</Text>
    </View>
  );
};

export default FoodCategory;
