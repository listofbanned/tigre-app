import React, { Component } from 'react';
import { StyleSheet,
    Dimensions,
    View,
    Text,
    TouchableOpacity,
    Animated
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

export default class Profile extends Component {
    returnToHome = () => {
        this.props.navigation.navigate('NavigatorController')
    }
    render() {
        return (
            <View style={ styles.container }>
                <View style={{ height: 50, borderBottomWidth: 2, borderBottomColor: '#dddddd'}}>
                    <View>
                        <Text style={{ alignSelf: 'center', marginTop: 20, fontWeight: '700' }}>Perfil del usuario</Text>
                    </View>
                    <Animated.View style={{ left: 0, marginHorizontal: 20, marginVertical: 10, position: 'absolute', top: this.animatedTagTop, opacity: this.animatedOpacity }}>
                        <TouchableOpacity style={{ backgroundColor: 'transparent' }} onPress={ this.returnToHome.bind(this) }>
                            <Icon name="ios-arrow-back" color='#00aced' size={30} />
                        </TouchableOpacity>
                    </Animated.View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: 'white'
    }
});