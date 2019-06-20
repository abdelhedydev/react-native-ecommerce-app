import React from 'react';
import {
  View, Image, Text, TouchableOpacity,
} from 'react-native';
import style from './HeaderStyle';
import back from '../../assets/png/back.png';
import heart from '../../assets/png/heart.png';
import telegram from '../../assets/png/telegram.png';
import dots from '../../assets/png/dots.png';
import pin from '../../assets/png/pin.png';

const Header = ({ goBack }) => (
  <View style={style.header}>
    <View style={style.nav}>
      <TouchableOpacity onPress={goBack}>
        <Image source={back} style={{ width: 30, height: 30 }} />
      </TouchableOpacity>
      <Image source={heart} style={{ width: 30, height: 30 }} />
      <Image source={telegram} style={{ width: 30, height: 30 }} />
      <Image source={dots} style={{ width: 30, height: 30 }} />
    </View>
    <View style={style.buttonContainer}>
      <View style={style.button}>
        <Image source={pin} style={{ width: 30, height: 30 }} />
        <Text style={style.buttonText}>Save</Text>
      </View>
    </View>
  </View>
);

export default Header;
