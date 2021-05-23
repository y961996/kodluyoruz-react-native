import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    height: Dimensions.get('window').height / 3 + 20,
    width: '45%',
    margin: 10,
  },
  image: {
    height: Dimensions.get('window').height / 3 - 50,
    width: '90%',
    borderRadius: 10,
    margin: 7,
  },
  titleText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
  },
  priceText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'gray',
  },
});
