import React from 'react';
import LottieView from 'lottie-react-native';

const Error = () => {
  return (
    <LottieView
      source={require('../../assets/error_exclamation.json')}
      autoPlay
    />
  );
};

export default Error;
