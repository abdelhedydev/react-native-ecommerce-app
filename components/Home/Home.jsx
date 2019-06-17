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
        <View>
          <Button
            title="Go To Login"
            color="#b30047"
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </View>
    );
  }
}

export default Home;
