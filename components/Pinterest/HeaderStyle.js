import { StyleSheet } from 'react-native';
import { dimensions } from '../../style';

const HeaderStyle = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
  },
  header: {
    backgroundColor: 'white',
    flexDirection: 'row',
    width: dimensions.fullWidth,
    height: 85,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    alignContent: 'center',
    paddingBottom: 10,
    borderBottomWidth: 2,
  },
  nav: {
    flexDirection: 'row',
    flex: 3,
    justifyContent: 'space-around'
  },
  buttonContainer: {
    flexDirection: 'row',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#d50c22',
    borderRadius: 11,
    height: 40,
    width: 120,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
    fontWeight: '700',
  }
});
export default HeaderStyle;
