import { StyleSheet } from 'react-native';
import { widthPercentage } from '../../style';

const UniverseStyle = StyleSheet.create({
  imgContainer: {
    alignItems: 'center',
    padding: 20
  },
  img: {
    width: widthPercentage(80),
    borderRadius: 22,
    position: 'relative'
  },
  imgfullScreen: {
    position: 'absolute',
    top: 35,
    right: widthPercentage(15)
  }
});
export default UniverseStyle;
