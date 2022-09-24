import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class Tag extends Component {
    render() {
        return (
            <View style={ styles.view_container }>
                <Text style={{ fontWeight: '700', fontSize: 10 }}>{this.props.name}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    view_container:  {
        minHeight: 20,
        minWidth: 40,
        padding: 5,
        backgroundColor: 'white',
        borderColor: '#dddddd',
        borderWidth: 1,
        borderRadius: 2,
        marginRight: 5
    }
});