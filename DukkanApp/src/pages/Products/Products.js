import React from 'react';
import {SafeAreaView, ActivityIndicator, FlatList, Text} from 'react-native';
import Config from 'react-native-config';

import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';

//import styles from './Products.style';

const Products = () => {
  const {error, loading, data} = useFetch(Config.API_URL);

  const renderProduct = ({item}) => <ProductCard product={item} />;

  if (loading) {
    // Andorid'te ActivityIndicator default olarak bir color
    // prop almadığı için eğer color verilmezse gözüknüyor.
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <SafeAreaView>
      <FlatList data={data} renderItem={renderProduct} />
    </SafeAreaView>
  );
};

export default Products;
