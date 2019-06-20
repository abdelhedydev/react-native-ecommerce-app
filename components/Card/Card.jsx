import React from 'react';
import {
  View, Text, Image
} from 'react-native';
import style from './CardStyle';
import cardImg from '../../assets/pizza-slice.png';

const Card = ({ title }) => (
  <View style={style.card}>
    <Image
      source={cardImg}
      style={style.img}
    />
    <Text style={style.title}>{title}</Text>
  </View>
);

export default Card;
