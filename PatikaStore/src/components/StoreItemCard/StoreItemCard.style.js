import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    height: '95%',
    width: '45%',
    margin: 7,
  },
  image: {
    height: Dimensions.get('window').height / 3 - 50,
    width: Dimensions.get('window').width / 2 - 40,
    borderRadius: 10,
    margin: 7,
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
});
