import React from 'react';
import LottieView from 'lottie-react-native';

const Loading = () => {
  return (
    <LottieView source={require('../../assets/loading_food.json')} autoPlay />
  );
};

export default Loading;
