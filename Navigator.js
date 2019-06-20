import { createStackNavigator } from 'react-navigation';
import Login from './components/Login';
import Home from './components/Home';
import Products from './components/Products';
import Pinterest from './components/Pinterest';

const Navigator = createStackNavigator({
  Home: { screen: Home },
  Pinterest: { screen: Pinterest },
  Login: { screen: Login },
  Products: { screen: Products },
  initialRouteName: 'Home',
});

export default Navigator;
