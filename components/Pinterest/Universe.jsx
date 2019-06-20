import React from 'react';
import {
  View, Image
} from 'react-native';
import style from './UniverStyle';
import universeImg from '../../assets/universe.jpg';
import fullScreen from '../../assets/png/full.png';


const Universe = () => (
  <View style={style.header}>
    <View style={style.imgContainer}>
      <Image source={universeImg} style={style.img} />
      <Image source={fullScreen} style={style.imgfullScreen} />
    </View>
  </View>
);

export default Universe;
