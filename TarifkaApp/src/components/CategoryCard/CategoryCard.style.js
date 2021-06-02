import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#ebeff2',
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
    borderRadius: 5,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 50,
  },
  category_text: {
    marginLeft: 5,
    fontSize: 20,
  },
});
