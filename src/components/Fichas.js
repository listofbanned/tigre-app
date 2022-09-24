import React, { Component } from 'react';
import { StyleSheet,
    Dimensions,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    ActivityIndicator,
    Image
} from 'react-native';
import { List, ListItem, SearchBar } from 'react-native-elements';

import Icon from 'react-native-vector-icons/Ionicons'
import IconFoundation from 'react-native-vector-icons/Octicons'

export default class Fichas extends Component {
    openMenu = () => {
        this.props.navigation.openDrawer()
    };
    sendData = (item) => {
        this.props.navigation.navigate('Pdf', item);
    };
    constructor(props) {
        super(props);

        this.state = {
          loading: false,
          data: [],
          search: '1'
        };
    }

    componentDidMount() {
        this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {
        const url = `https://yurikostudio.com/tigre/fichas.php?q=` + this.state.search;

        fetch(url)
          .then(res => res.json())
          .then(res => {
            this.setState({
              data: res.results,
              error: res.error || "null"
            });
          })
          .catch(error => {
            this.setState({ error, loading: false });
          });
    };

    searchAction(value) {
        if (value != '') {
            this.setState({ search: value });
        } else {
            this.setState({ search: '1' });
        }

        this.makeRemoteRequest();
    }

    returnToHome = () => {
        this.props.navigation.navigate('Home')
    }
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
    render() {
        return (
            <View style={ styles.container }>
                <View style={{ height: 50, borderBottomWidth: 2, borderBottomColor: '#dddddd'}}>
                    <View>
                        <Text style={{ alignSelf: 'center', marginTop: 20, fontWeight: '700', color: 'white' }}>Fichas Técnicas</Text>
                    </View>
                    <View style={{ left: 0, marginHorizontal: 20, marginVertical: 14, position: 'absolute' }}>
                        <TouchableOpacity style={{ backgroundColor: 'transparent' }}>
                            <Icon name="ios-menu" color='#00aced' size={30} onPress={ this.openMenu.bind(this) } />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={ styles.body }>
                    <View style={ styles.searchBarContainer }>
                        <SearchBar
                            placeholder="Buscador (ingrese al menos 3 letras)"
                            lightTheme
                            onChangeText={ this.value, this.searchAction.bind(this) }
                            onClear={ this.searchAction.bind(this) }
                            roundcancelButtonTitle="Cancel"
                            autoCapitalize="none"
                            autoCorrect={false}
                            containerStyle={{ backgroundColor: 'white' }}
                            inputStyle={{ backgroundColor: 'white' }}
                        />  
                    </View>
                    <FlatList
                        style={{ flex: 1, width: '100%' }}
                        removeClippedSubviews={false}
                        data={ this.state.data }
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={ () => this.sendData(item) }
                                style={ styles.pdfButton }
                            >
                                <View style={ styles.textContent }>
                                    <Text style={{ marginLeft: 20, color: '#243189' }}>{ item.title }</Text>
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
        flex: 1,
        height: '100%',
        width: '100%'
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
        width: 220,
        justifyContent: 'center'
    },
    searchBarContainer: {
        width: '100%',
        alignSelf: 'center',
        marginBottom: 20
    }
});