import { StyleSheet } from 'react-native';
import { heightPercentage, widthPercentage } from '../../style';

const PinterestStyle = StyleSheet.create({
  container: {
    height: heightPercentage(100),
    position: 'relative',
    paddingBottom: 80,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'flex-end',
    width: widthPercentage(100)
  }
});
export default PinterestStyle;
