import React, { Component } from 'react';
import { StyleSheet,
    Dimensions,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
import Pdf from 'react-native-pdf';

export default class Catalogo extends Component {
    openMenu = () => {
        this.props.navigation.openDrawer()
    };
    returnToHome = () => {
        this.props.navigation.navigate('Home')
    }
    render() {
        const source = { uri: 'https://yurikostudio.com/tigre/catalogo/catalogo.pdf', cache: false };
        //const source = require('./test.pdf');  // ios only
        //const source = {uri:'bundle-assets://test.pdf'};

        //const source = {uri:'file:///sdcard/test.pdf'};
        //const source = {uri:"data:application/pdf;base64,..."};

        return (
            <View style={ styles.container }>
                <View style={{ height: 50, borderBottomWidth: 2, borderBottomColor: '#dddddd'}}>
                    <View>
                        <Text style={{ alignSelf: 'center', marginTop: 20, fontWeight: '700', color: 'white' }}>Catálogo</Text>
                    </View>
                    <View style={{ left: 0, marginHorizontal: 20, marginVertical: 14, position: 'absolute' }}>
                        <TouchableOpacity style={{ backgroundColor: 'transparent' }}>
                            <Icon name="ios-menu" color='#00aced' size={30} onPress={ this.openMenu.bind(this) } />
                        </TouchableOpacity>
                    </View>
                </View>
                <Pdf
                    source={ source }
                    onLoadComplete={(numberOfPages,filePath)=>{
                        console.log(`number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages)=>{
                        console.log(`current page: ${page}`);
                    }}
                    onError={(error)=>{
                        console.log(error);
                    }}
                    style={ styles.pdf }
                />
            </View>
        )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#243189'
    },
    pdf: {
        flex:1,
        width: Dimensions.get('window').width
    }
});