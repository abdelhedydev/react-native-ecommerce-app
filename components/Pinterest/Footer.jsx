import React from 'react';
import {
  View, Image,
} from 'react-native';
import style from './FooterStyle';
import gmail from '../../assets/footer/png/001-gmail.png';
import search from '../../assets/footer/png/002-musica-searcher.png';
import message from '../../assets/footer/png/003-envelope.png';
import user from '../../assets/footer/png/004-user.png';

const Footer = () => (
  <View style={style.footer}>
    <Image source={gmail} style={{ width: 30, height: 30 }} />
    <Image source={search} style={{ width: 30, height: 30 }} />
    <Image source={message} style={{ width: 30, height: 30 }} />
    <Image source={user} style={{ width: 30, height: 30 }} />
  </View>
);

export default Footer;
