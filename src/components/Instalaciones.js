import React, { Component } from 'react';
import { StyleSheet,
    Dimensions,
    View,
    Text,
    TouchableOpacity,
    WebView,
    FlatList
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

var url = 'https://yurikostudio.com/tigre/youtube.php'

export default class Instalaciones extends Component {
    openMenu = () => {
        this.props.navigation.openDrawer()
    };
    returnToHome = () => {
        this.props.navigation.navigate('Home')
    };
    render() {
        return (
            <View style={ styles.container }>
                <View style={{ height: 50, borderBottomWidth: 2, borderBottomColor: '#dddddd'}}>
                    <View>
                        <Text style={{ alignSelf: 'center', marginTop: 20, fontWeight: '700', color: 'white' }}>Instalaciones</Text>
                    </View>
                    <View style={{ left: 0, marginHorizontal: 20, marginVertical: 14, position: 'absolute' }}>
                        <TouchableOpacity style={{ backgroundColor: 'transparent' }}>
                            <Icon name="ios-menu" color='#00aced' size={30} onPress={ this.openMenu.bind(this) } />
                        </TouchableOpacity>
                    </View>
                </View>
                <WebView 
                    source={{ uri: url }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#243189'
    },
    body: {
        height: '100%',
        flex: 1
    }
});