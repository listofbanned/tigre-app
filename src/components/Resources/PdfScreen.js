import React, { Component } from 'react';
import { StyleSheet,
    Dimensions,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
import Pdf from 'react-native-pdf';

export default class PdfScreen extends Component {
    return = () => {
        this.props.navigation.navigate('Fichas')
    }
    render() {
    	const { title, url } = this.props.navigation.state.params;
        const source = { uri: url, cache: true };
        //const source = require('./test.pdf');  // ios only
        //const source = {uri:'bundle-assets://test.pdf'};

        //const source = {uri:'file:///sdcard/test.pdf'};
        //const source = {uri:"data:application/pdf;base64,..."};

        return (
            <View style={ styles.container }>
                <View style={{ height: 50, borderBottomWidth: 2, borderBottomColor: '#dddddd'}}>
                    <View>
                        <Text style={{ alignSelf: 'center', marginTop: 20, fontWeight: '700', color: 'white' }}>{ title }</Text>
                    </View>
                    <View style={{ left: 0, marginHorizontal: 20, marginVertical: 14, position: 'absolute' }}>
                        <TouchableOpacity style={{ backgroundColor: 'transparent' }} onPress={ this.return.bind(this) }>
                            <Icon name="ios-arrow-back" color='#00aced' size={30} />
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