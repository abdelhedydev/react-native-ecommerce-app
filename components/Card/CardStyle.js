import { StyleSheet } from 'react-native';
import { dimensions } from '../../style';

const loginStyle = StyleSheet.create({
  card: {
    width: (dimensions.fullWidth * 0.8),
    backgroundColor: 'white',
    flexDirection: 'row',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 40,
    borderColor: 'grey',
    margin: 30,
    borderRadius: 15,
  },
  img: {
    width: 50,
    height: 80,
    marginRight: 20,
  },
  title: {
    color: 'grey',
  }
});
export default loginStyle;
