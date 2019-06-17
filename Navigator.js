import { createStackNavigator } from 'react-navigation';
import Login from './components/Login';
import Home from './components/Home';
import Products from './components/Products';

const Navigator = createStackNavigator({
  Home: { screen: Home },
  Login: { screen: Login },
  Products: { screen: Products },
  initialRouteName: 'Home',
});

export default Navigator;
