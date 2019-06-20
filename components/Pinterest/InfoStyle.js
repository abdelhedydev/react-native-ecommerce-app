import { StyleSheet } from 'react-native';
import { widthPercentage } from '../../style';

const InfoStyle = StyleSheet.create({
  info: {
    paddingHorizontal: widthPercentage(8),
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text: {
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 18,
    color: 'grey'
  },
  detail: {
    fontSize: 16,
    fontWeight: '900',
    color: 'grey'
  },
  button: {
    borderRadius: 11,
    height: 40,
    width: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0ebeb',
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
  }
});
export default InfoStyle;
