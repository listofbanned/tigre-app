import React, { Component } from 'react';
import {
    Alert,
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    ScrollView,
    Image,
    Dimensions,
    TouchableOpacity,
    Linking
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

import Banner from './banner'
import Category from './Resources/Category'
import Tag from './Resources/Tag'
import Profile from './Profile'

const { height, width } = Dimensions.get('window')
const whatsapp = 'whatsapp://send?phone=+595986103561'
//var url = 'https://yurikostudio.com/tigre/banner/bg.jpg' + '?q=' + new Date().getTime()
var url = 'https://yurikostudio.com/tigre/banner/bg.jpg'

export default class Home extends Component {
    goToProfile = () => {
        this.props.navigation.navigate('Profile')
    };
    openMenu = () => {
        this.props.navigation.openDrawer()
    };
    goToCatalogo = () => {
        this.props.navigation.navigate('Catalogo')
    };
    goToFichas = () => {
        this.props.navigation.navigate('Fichas')
    };
    goToLanzamientos = () => {
        this.props.navigation.navigate('Lanzamientos')
    };
    goToInstalaciones = () => {
        this.props.navigation.navigate('Instalaciones')
    };
    goToTips = () => {
        this.props.navigation.navigate('Tips')
    };
    goToDirectorio = () => {
        this.props.navigation.navigate('Directorio')
    };
    render() {
        return (
            <SafeAreaView style={ styles.explore_container }>
                <View style={{ flex: 1 }}>
                    <View style={{ height: 50, borderBottomWidth: 2, borderBottomColor: '#dddddd', marginTop: 20}}>
                        <View>
                            <Text style={{ alignSelf: 'center', marginTop: 20, fontWeight: '700', color: 'white' }}>Home</Text>
                        </View>
                        <View style={{ right: 0, marginHorizontal: 20, marginVertical: 14, position: 'absolute' }}>
                        </View>
                        <View style={{ left: 0, marginHorizontal: 20, marginVertical: 14, position: 'absolute' }}>
                            <TouchableOpacity style={{ backgroundColor: 'transparent' }}>
                                <Icon name="ios-menu" color='#00aced' size={30} onPress={ this.openMenu.bind(this) } />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <View style={ styles.view_container }>
                            <Banner />
                        </View>
                        <ScrollView style={ styles.body }>
                            <View style={ styles.bodyContent }>
                                <View style={ styles.access }>
                                    <TouchableOpacity style={ styles.accessButton } onPress={ this.goToCatalogo.bind(this) }>
                                        <Image source={require('../images/catalogo.png' )}
                                            style={ styles._icon }
                                        />
                                    </TouchableOpacity>
                                    <Text style={{ alignSelf: 'center', fontSize: 14, color: '#00aced' }}>Catálogo</Text>
                                </View>
                                <View style={ styles.access }>
                                    <TouchableOpacity style={ styles.accessButton } onPress={ this.goToFichas.bind(this) }>
                                        <Image source={require('../images/fichas.png' )}
                                            style={ styles._icon }
                                        />
                                    </TouchableOpacity>
                                    <Text style={{ alignSelf: 'center', fontSize: 14, color: '#00aced' }}>Fichas</Text>
                                </View>
                                <View style={ styles.access }>
                                    <TouchableOpacity style={ styles.accessButton } onPress={ this.goToLanzamientos.bind(this) }>
                                        <Image source={require('../images/novedades.png' )}
                                            style={ styles._icon }
                                        />
                                    </TouchableOpacity>
                                    <Text style={{ alignSelf: 'center', fontSize: 14, color: '#00aced' }}>Novedades</Text>
                                </View>
                                <View style={ styles.access }>
                                    <TouchableOpacity style={ styles.accessButton } onPress={ this.goToInstalaciones.bind(this) }>
                                        <Image source={require('../images/instalaciones.png' )}
                                            style={ styles._icon }
                                        />
                                    </TouchableOpacity>
                                    <Text style={{ alignSelf: 'center', fontSize: 14, color: '#00aced' }}>Instalaciones</Text>
                                </View>
                                <View style={ styles.access }>
                                    <TouchableOpacity style={ styles.accessButton } onPress={ this.goToTips.bind(this) }>
                                        <Image source={require('../images/tips.png' )}
                                            style={ styles._icon }
                                        />
                                    </TouchableOpacity>
                                    <Text style={{ alignSelf: 'center', fontSize: 14, color: '#00aced' }}>Sabías que?</Text>
                                </View>
                                <View style={ styles.access }>
                                    <TouchableOpacity style={ styles.accessButton } onPress={ this.goToDirectorio.bind(this) }>
                                        <Image source={require('../images/contactos.png' )}
                                            style={ styles._icon }
                                        />
                                    </TouchableOpacity>
                                    <Text style={{ alignSelf: 'center', fontSize: 14, color: '#00aced' }}>Contactos</Text>
                                </View>
                            </View>
                        </ScrollView>
                        <TouchableOpacity
                            style={ styles.whatsappContainer }
                            onPress={ () => Linking.canOpenURL(whatsapp).then(supported => {
                                    if (supported) {
                                        Linking.openURL(whatsapp);
                                    } else {
                                        Alert.alert('La aplicación "WhatsApp" no está instalada')
                                    }
                                })
                            }
                        >
                            <Image source={require('../images/whatsapp-logo.png' )}
                                style={ styles.whatsappLogo }
                            />
                        </TouchableOpacity>
                    </View>

                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    explore_container: {
        flex: 1,
        backgroundColor: '#243189'
    },
    view_container: {
        height: 230,
        width: '90%',
        alignSelf: 'center'
    },
    body: {
        width,
        height: 550
    },
    bodyContent: {
        marginTop: 20,
        paddingHorizontal: 30,
        height: 500,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    access: {
        marginVertical: 20,
        width: 90,
        height: 90
    },
    accessButton: {
        marginLeft: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: 'transparent',
        width: 75,
        height: 75
    },
    whatsappContainer: {
        zIndex: 1,
        position: 'absolute',
        marginTop: '120%',
        right: 10,
        backgroundColor: 'transparent'
    },
    whatsappLogo: {
        width: 90,
        height: 90,
    },
    _icon: {
        width: 90,
        height: 90,
    }
});