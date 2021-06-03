import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
  },
  header_container: {
    margin: 5,
  },
  body_container: {
    margin: 5,
  },
  image: {
    width: deviceSize.width,
    height: (deviceSize.height * 1) / 3,
  },
  meal: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#a4292b',
  },
  area: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#a4292b',
  },
  instructions: {
    fontSize: 12,
  },
  youtube: {
    padding: 10,
    color: 'white',
    backgroundColor: '#fe0000',
    borderRadius: 10,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  horizontal_line: {
    borderBottomColor: '#cbcbcb',
    borderBottomWidth: 2,
  },
});
