import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Config from 'react-native-config';

import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import MealCard from '../../components/MealCard';

import styles from './Foods.style';

const Foods = ({route}) => {
  const {category} = route.params;
  const {loading, error, data} = useFetch(
    `${Config.API_URL_MEAL_BY_CATEGORY}${category}`,
  );

  const handleMealSelect = () => {};

  const renderMeal = ({item}) => (
    <MealCard meal={item} onSelect={() => handleMealSelect(item.idMeal)} />
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
      data={data.meals}
      renderItem={renderMeal}
      keyExtractor={(item, index) => item.idMeal}
    />
  );
};

export default Foods;
