import React, { Component } from 'react';
import { StyleSheet,
    Dimensions,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
import GetTips from './Resources/GetTips'

export default class Lanzamientos extends Component {
    openMenu = () => {
        this.props.navigation.openDrawer()
    };
    returnToHome = () => {
        this.props.navigation.navigate('Home')
    }
    render() {
        return (
            <ScrollView style={ styles.container }>
                <View style={{ height: 50, borderBottomWidth: 2, borderBottomColor: '#dddddd'}}>
                    <View>
                        <Text style={{ alignSelf: 'center', marginTop: 20, fontWeight: '700', color: 'white' }}>Sabias que?</Text>
                    </View>
                    <View style={{ left: 0, marginHorizontal: 20, marginVertical: 14, position: 'absolute' }}>
                        <TouchableOpacity style={{ backgroundColor: 'transparent' }}>
                            <Icon name="ios-menu" color='#00aced' size={30} onPress={ this.openMenu.bind(this) } />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={ styles.bodyCenter }>
                    <GetTips />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#243189'
    },
    bodyCenter: {
        height: 600,
        width: '100%'
    },
    bodyBottom: {
        height: 220,
        width: '100%'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
});
