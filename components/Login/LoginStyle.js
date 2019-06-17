import { StyleSheet } from 'react-native';
import { dimensions } from '../../style';

const loginStyle = StyleSheet.create({
  container: {
    backgroundColor: '#000d1a',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  wrapper: {
    marginBottom: 25
  },
  text: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
  error: {
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 0.5,
    borderColor: 'grey',
    // width: 320,
    color: 'white',
    padding: 10,
    borderRadius: 22,
    width: (dimensions.fullWidth * 0.8),
  }
});
export default loginStyle;
