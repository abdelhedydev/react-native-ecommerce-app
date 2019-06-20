import { StyleSheet } from 'react-native';

const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000d1a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginBottom: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
export default HomeStyle;
