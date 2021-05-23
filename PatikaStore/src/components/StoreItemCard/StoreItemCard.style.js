import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    flex: 1,
    height: '95%',
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
  },
  image: {
    height: Dimensions.get('window').height / 3 - 40,
    borderRadius: 10,
    margin: 5,
  },
  titleText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
    marginLeft: 7,
  },
  priceText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'gray',
    marginLeft: 7,
  },
  inStockText: {
    fontWeight: 'bold',
    color: 'red',
    marginLeft: 7,
  },
});
