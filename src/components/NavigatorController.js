import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

import { createDrawerNavigator, DrawerItems } from 'react-navigation'

import Icon from 'react-native-vector-icons/Ionicons'

import { Container, Header, Body, Content } from 'native-base'

import Home from './Home'
import Catalogo from './Catalogo'
import Fichas from './Fichas'
import Lanzamientos from './Lanzamientos'
import Instalaciones from './Instalaciones'
import Tips from './Tips'
import Directorio from './Directorio'

const CustomDrawerContentComponent = (props) => (
  <Container>
    <Header style={{ height: 250, backgroundColor: '#f5f6fa' }}>
      <Body>
        <Image
          style={ styles.drawerTop }
          source={require('./../images/logo_circle.png')}
        />
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>
  </Container>
)

export default createDrawerNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      drawerLabel: 'HOME',
      drawerIcon: ({ tintColor }) => (
        <View style={ styles.accessButton }>
            <Image source={require('../images/_home.png' )}
              style={ styles._icon }
            />
        </View>
      )
    }
  },
  Catalogo: {
    screen: Catalogo,
    navigationOptions: {
      drawerLabel: 'CATÁLOGO',
      drawerIcon: ({ tintColor }) => (
        <View style={ styles.accessButton }>
          <Image source={require('../images/_catalogo.png' )}
              style={ styles._icon }
            />
        </View>
      )
    }
  },
  Fichas: {
    screen: Fichas,
    navigationOptions: {
      drawerLabel: 'FICHAS TÉCNICAS',
      drawerIcon: ({ tintColor }) => (
        <View style={ styles.accessButton }>
          <Image source={require('../images/_fichas.png' )}
              style={ styles._icon }
            />
        </View>
      )
    }
  },
  Lanzamientos: {
    screen: Lanzamientos,
    navigationOptions: {
      drawerLabel: 'NOVEDADES',
      drawerIcon: ({ tintColor }) => (
        <View style={ styles.accessButton }>
          <Image source={require('../images/_novedades.png' )}
              style={ styles._icon }
            />
        </View>
      )
    }
  },
  Instalaciones: {
    screen: Instalaciones,
    navigationOptions: {
      drawerLabel: 'INSTALACIONES',
      drawerIcon: ({ tintColor }) => (
        <View style={ styles.accessButton }>
          <Image source={require('../images/_instalaciones.png' )}
              style={ styles._icon }
            />
        </View>
      )
    }
  },
  Tips: {
    screen: Tips,
    navigationOptions: {
      drawerLabel: 'TIPS',
      drawerIcon: ({ tintColor }) => (
        <View style={ styles.accessButton }>
          <Image source={require('../images/_tips.png' )}
              style={ styles._icon }
            />
        </View>
      )
    }
  },
  Directorio: {
    screen: Directorio,
    navigationOptions: {
      drawerLabel: 'CONTACTOS',
      drawerIcon: ({ tintColor }) => (
        <View style={ styles.accessButton }>
          <Image source={require('../images/_contactos.png' )}
              style={ styles._icon }
            />
        </View>
      )
    }
  }
}, {
  initialRouteName: 'Home',
  contentComponent: CustomDrawerContentComponent
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  drawerTop: {
    width: 140,
    height: 180,
    alignSelf: 'center'
  },
  accessButton: {
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: 'transparent',
    width: 45,
    height: 45
  },
  _icon: {
    width: 45,
    height: 45,
  }
});
