import React from 'react';
import Config from 'react-native-config';

import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import MealDetailCard from '../../components/MealDetailCard';

import styles from './Detail.style';

const Detail = ({route}) => {
  const {idMeal} = route.params;
  const {loading, error, data} = useFetch(
    `${Config.API_URL_MEAL_BY_ID}${idMeal}`,
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return <MealDetailCard meal={data.meals} />;
};

export default Detail;
