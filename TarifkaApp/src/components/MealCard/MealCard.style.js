import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    margin: 10,
    marginBottom: 5,
    width: deviceSize.width - 20,
    height: deviceSize.height / 4,
    borderRadius: 10,
    justifyContent: 'flex-end',
  },
  bottom_container: {
    backgroundColor: 'rgba(52, 52, 52, 0.4)',
    textAlign: 'right',
    alignItems: 'flex-end',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  image: {
    position: 'absolute',
    width: deviceSize.width - 20,
    height: deviceSize.height / 4,
    borderRadius: 10,
  },
  meal_text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 28,
    marginRight: 5,
  },
});
