import React from 'react';
import {FlatList} from 'react-native';
import Config from 'react-native-config';

import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import CategoryCard from '../../components/CategoryCard';

import styles from './FoodCategory.style';

const FoodCategory = ({navigation}) => {
  const {error, loading, data} = useFetch(Config.API_URL_CATEGORIES);

  const handleCategorySelect = category => {
    navigation.navigate('FoodsScreen', {category});
  };

  const renderCategory = ({item}) => (
    <CategoryCard
      product={item}
      onSelect={() => handleCategorySelect(item.strCategory)}
    />
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <FlatList
      style={styles.container}
      data={data.categories}
      renderItem={renderCategory}
      keyExtractor={(item, index) => item.idCategory}
    />
  );
};

export default FoodCategory;
