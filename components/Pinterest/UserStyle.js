import { StyleSheet } from 'react-native';
import { widthPercentage } from '../../style';

const InfoStyle = StyleSheet.create({
  user: {
    paddingHorizontal: widthPercentage(8),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  img: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 70
  },
  text: {
    alignItems: 'flex-start',
    width: widthPercentage(65),
    // backgroundColor: 'black'
  },
  title: {
    fontSize: 14,
    color: 'grey',
    fontWeight: '900',
    letterSpacing: 0.8,
    marginBottom: 10,
  },
  detail: {
    fontSize: 14,
    color: 'grey',
    fontWeight: '400',
    letterSpacing: 0.8
  },
});
export default InfoStyle;
