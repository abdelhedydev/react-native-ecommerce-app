import React from 'react';
import {
  View, Text, Image,
} from 'react-native';
import style from './UserStyle';
import badge from '../../assets/png/user.png';

const User = () => (
  <View style={style.user}>
    <View style={style.img}>
      <Image source={badge} style={{ width: 50, height: 50 }} />
    </View>

    <View style={style.text}>
      <Text style={style.title}>
        Kalvin Gatsby
        <Text style={style.detail}>
          saved to
        </Text>
        GT
      </Text>
      <Text style={style.detail}>
        Space station Mir / Mnp assembied
        in orbit between 1986 and 1996. Mir
        was decommissioned and destroyed
        during its re-entry in the atmosphere
        on 23 March 2001.
      </Text>
    </View>
  </View>
);

export default User;
