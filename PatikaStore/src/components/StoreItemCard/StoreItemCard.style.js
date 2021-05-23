import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    height: Dimensions.get('window').height / 3 + 20,
    width: Dimensions.get('window').width / 2,
    margin: 10,
  },
  image: {
    height: Dimensions.get('window').height / 3 - 50,
    width: Dimensions.get('window').width / 2 - 10,
    borderRadius: 10,
    margin: 5,
  },
});
