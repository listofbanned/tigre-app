import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
// warning box
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RNFetchBlob requires main queue setup', 'Module RCTImageLoader']);

import Login from './src/components/Login';
import NavigatorController from './src/components/NavigatorController';
import Profile from './src/components/Profile'
import Catalogo from './src/components/Catalogo'
import Fichas from './src/components/Fichas'
import Lanzamientos from './src/components/Lanzamientos'
import Instalaciones from './src/components/Instalaciones'
import Tips from './src/components/Tips'
import Directorio from './src/components/Directorio'
import Pdf from './src/components/Resources/PdfScreen'

const StartApp = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      gesturesEnabled: false
    }
  },
  NavigatorController: {
    screen: NavigatorController,
    navigationOptions: {
      gesturesEnabled: false
    }
  },
  Profile: {
    screen: Profile
  },
  Catalogo: {
    screen: Catalogo
  },
  Fichas: {
    screen: Fichas
  },
  Lanzamientos: {
    screen: Lanzamientos
  },
  Instalaciones: {
    screen: Instalaciones
  },
  Tips: {
    screen: Tips
  },
  Directorio: {
    screen: Directorio
  },
  Pdf: {
    screen: Pdf
  }
},
{
  headerMode: 'none'
}
);

export default class App extends Component {
  render() {
    return (
      <StartApp />
    )
  }
}