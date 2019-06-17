import { StyleSheet } from 'react-native';

const Products = StyleSheet.create({
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
  input: {
    borderWidth: 0.5,
    borderColor: 'grey',
    width: 320,
    color: 'white',
    padding: 10
  }
});
export default Products;
