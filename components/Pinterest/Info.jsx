import React from 'react';
import {
  View, Text
} from 'react-native';
import style from './InfoStyle';

const Info = () => (
  <View style={style.info}>
    <View style={style.text}>
      <Text style={style.title}>Saved from</Text>
      <Text style={style.detail}>eneergia.ru</Text>
    </View>
    <View style={style.buttonContainer}>
      <View style={style.button}>
        <Text style={style.buttonText}>Visit</Text>
      </View>
    </View>
  </View>
);

export default Info;
