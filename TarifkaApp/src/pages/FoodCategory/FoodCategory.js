import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Config from 'react-native-config';

import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

import styles from './FoodCategory.style';

const FoodCategory = ({navigation}) => {
  const {error, loading, data} = useFetch(Config.API_URL_CATEGORIES);
  console.log(error, loading, data.length);
  if (loading) {
    return <Loading />;
  }

  if (error) {
    console.log(error);
    return <Error />;
  }

  return (
    <View>
      <Text>Categories</Text>
    </View>
  );
};

export default FoodCategory;
