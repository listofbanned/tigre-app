import React, { Component } from 'react';
import { StyleSheet,
    Dimensions,
    View,
    Text,
    TouchableOpacity,
    FlatList,
    Linking
} from 'react-native';
import { List, ListItem, SearchBar } from 'react-native-elements';

import Icon from 'react-native-vector-icons/Ionicons'

export default class Instalaciones extends Component {
    openMenu = () => {
        this.props.navigation.openDrawer()
    }
    sendData = (item) => {
        this.props.navigation.navigate('News', item);
    }
    constructor(props) {
        super(props);

        this.state = {
          data: [],
          error: null,
        };
    }

    componentDidMount() {
        this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {
        const { page, seed } = this.state;
        const url = `https://yurikostudio.com/tigre/directorio.php`;

        fetch(url)
          .then(res => res.json())
          .then(res => {
            this.setState({
              data: res.results,
              error: res.error || "null"
            });
          });
    };

    renderSeparator = () => {
      return (
        <View
          style={{
            height: 1,
            width: "100%",
            backgroundColor: "#CED0CE"
          }}
        />
      );
    };

    renderHeader = () => {
        return <SearchBar placeholder="Buscar..." lightTheme round autoCapitalize="none" autoCorrect={ false } />;
    };
    returnToHome = () => {
        this.props.navigation.navigate('Home')
    }
    render() {
        return (
            <View style={ styles.container }>
                <View style={{ height: 50, borderBottomWidth: 2, borderBottomColor: '#dddddd'}}>
                    <View>
                        <Text style={{ alignSelf: 'center', marginTop: 20, fontWeight: '700', color: 'white' }}>Contactos</Text>
                    </View>
                    <View style={{ left: 0, marginHorizontal: 20, marginVertical: 14, position: 'absolute' }}>
                        <TouchableOpacity style={{ backgroundColor: 'transparent' }}>
                            <Icon name="ios-menu" color='#00aced' size={30} onPress={ this.openMenu.bind(this) } />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={ styles.body }>
                    <FlatList
                        style={{ flex: 1, width: '100%', marginTop: 15 }}
                        data={ this.state.data }
                        renderItem={({ item }) => (
                            /*<ListItem
                                style={{ backgroundColor: 'white' }}    
                                roundAvatar
                                title={ item.nombre }
                                subtitle={ item.profesion + ' (' + item.telefono + ')' + ', ' + item.ciudad }
                                //avatar={{ uri: item.picture.thumbnail }}
                                onPress={ () => Linking.openURL('tel:' + item.telefono) }
                            />*/
                            <TouchableOpacity
                                onPress={ () => Linking.openURL('tel:' + item.telefono) }
                                style={ styles.pdfButton }
                            >
                                <View style={ styles.textContent }>
                                    <Text style={{ marginLeft: 20, color: '#243189', fontWeight: '700' }}>{ item.nombre }</Text>
                                    <Text style={{ marginLeft: 20, color: 'blue', fontSize: 12 }}>{ item.profesion } ({ item.telefono }) { item.ciudad }</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                        keyExtractor={ item => item.id }
                        onEndReachedThreshold={ 50 }
                    />
                </View>
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
        height: '100%'
    },
    view: {
        paddingVertical: 0,
        borderTopWidth: 1,
        borderColor: "#CED0CE"
    },
    containerStyle: {
        borderTopWidth: 0,
        borderBottomWidth: 0
    },
    bottomWidth: {
        borderBottomWidth: 0
    },
    pdfButton: {
        color: 'white',
        width: '70%',
        height: 60,
        marginBottom: 5,
        alignItems: 'center',
        alignSelf: 'center'
    },
    textContent: {
        backgroundColor: 'white',
        borderRadius: 35,
        height: 50,
        width: 280,
        justifyContent: 'center'
    }
});