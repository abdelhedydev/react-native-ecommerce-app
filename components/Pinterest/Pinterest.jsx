import React from 'react';
import {
  View, ScrollView,
} from 'react-native';
import Header from './Header';
import Universe from './Universe';
import Info from './Info';
import User from './User';
import Footer from './Footer';
import style from './PinterestStyle';

class Pinterest extends React.Component {
  static navigationOptions = {
    header: null
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={style.container}>
        <Header goBack={() => navigation.goBack()} />
        <ScrollView>
          <Universe />
          <Info />
          <User />
        </ScrollView>
        <View style={style.footer}>
          <Footer />
        </View>
      </View>
    );
  }
}

export default Pinterest;
