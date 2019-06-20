import React from 'react';
import {
  View, Text, Button,
} from 'react-native';
import style from './HomeStyle';

class Home extends React.Component {
  static navigationOptions = {
    title: 'Go Back',
    header: null,
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={style.container}>
        <Text style={style.title}>Welcome To Awesome App</Text>
        <View style={style.buttons}>
          <Button
            title="Products"
            color="#b30047"
            onPress={() => navigation.navigate('Products')}
          />
          <Button
            title="Go To Login"
            color="#007399"
            onPress={() => navigation.navigate('Login')}
          />
          <Button
            title="Pinterest"
            color="#d50c22"
            onPress={() => navigation.navigate('Pinterest')}
          />
        </View>
      </View>
    );
  }
}

export default Home;
