import React, { Component } from 'react';
import {
  AsyncStorage,
  AppRegistry,
  Alert,
  TouchableOpacity,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Image,
  Keyboard,
  SafeAreaView
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
import { TextInputMask } from 'react-native-masked-text'

import Logo from '../images/logo.png';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
      job: '',
      birthday: '',
      question: ''
    };
  }

  componentDidMount() {
    //AsyncStorage.clear()
    AsyncStorage.getItem("key").then((value) => {
        //this.setState({"key": value})
        if (value == 'key') {
          this.props.navigation.navigate('NavigatorController')
        }
    }).done();
  }

  onLogin = () => {
    var { name, number, job, birthday, question } = this.state;
    if (name != '' && number != '' && job != '' && birthday != '' && question != '') {
      // clear text inputs
      //this.nameInput.setNativeProps({ text: '' })
      //this.numberInput.setNativeProps({ text: '' })
      //this.jobInput.setNativeProps({ text: '' })
      //this.birthdayInput.setNativeProps({ text: '' })

      fetch('https://yurikostudio.com/tigre/user.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          number: number,
          job: job,
          birthday: birthday,
          question: question
        })
      }).then((response) => response.json())
          .then((response) => {
          }).catch((error) => {
            console.error(error);
          });

      AsyncStorage.setItem("key", "key")
      this.props.navigation.navigate('NavigatorController')
      Keyboard.dismiss()

      // clear state variables
      //this.state.name = ''
      //this.state.number = ''
      //this.state.job = ''
      //this.state.birthday = ''
    } else {
      Alert.alert('Error', 'Complete todos los campos!');
    }
  };

  isValid = () => {
    // isValid method returns if the inputed value is valid.
    // Ex: if you input 40/02/1990 30:20:20, it will return false
    //     because in this case, the day and the hour is invalid.
    let valid = this.birthdayInput.isValid();

    // get converted value. Using type=datetime, it returns the moment object.
    // If it's using type=money, it returns a Number object.
    let rawValue = this.birthdayInput.getRawValue();
  }

  render() {
    return (
      <SafeAreaView style={ styles.container }>
        <KeyboardAvoidingView style={ styles.container } keyboardVerticalOffset={-500} behavior='padding'>
            <View style={ styles.logoContainer }>
              <Image style={ styles.logo } source={ Logo } />
            </View>
            <View style={ styles.welcome }>
              <Text style={ styles.welcomeText }>Bienvenido a Tigre!</Text>
              <Text style={ styles.welcomeText }>Antes de comenzar, queremos conocerte.</Text>
            </View>
            <View style={ styles.infoContainer }>
              <View style={{ marginBottom: 60 }}>
                <TextInput
                  value={ this.state.name }
                  onChangeText={ (name) => this.setState({ name }) }
                  placeholder={ 'Nombre y apellido' }
                  autoCorrect={ false }
                  style={ styles.input }
                  ref={element => {this.nameInput = element}}
                />
                <TextInput
                  value={ this.state.number }
                  onChangeText={ (number) => this.setState({ number }) }
                  placeholder={ 'Número de celular' }
                  autoCorrect={ false }
                  keyboardType='numeric'
                  style={ styles.input }
                  ref={element => {this.numberInput = element}}
                />
                <TextInput
                  value={ this.state.job }
                  onChangeText={ (job) => this.setState({ job }) }
                  placeholder={ 'Profesión' }
                  autoCorrect={ false }
                  style={ styles.input }
                  ref={element => {this.jobInput = element}}
                />
                <TextInputMask
                  value={ this.state.birthday }
                  onChangeText={ (birthday) => this.setState({ birthday }) }
                  placeholder={ 'Nacimiento: dia/mes/año' }
                  autoCorrect={ false }
                  type={'datetime'}
                  style={ styles.input }
                  ref={element => {this.birthdayInput = element} }
                  options={{
                    format: 'DD/MM/YYYY'
                  }}
                />
                <TextInput
                  value={ this.state.question }
                  onChangeText={ (question) => this.setState({ question }) }
                  placeholder={ '¿Dónde compra con frecuencia?' }
                  autoCorrect={ false }
                  style={ styles.input }
                  ref={element => {this.questionInput = element}}
                />
              </View>

              <TouchableOpacity
                style={ styles.buttonContainer }
                onPress={ this.onLogin.bind(this) }
              >
                <Text style={ styles.buttonText }>Ingresar</Text>
              </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#048',
    flexDirection: 'column'
  },
  welcome: {
    alignItems: 'center',
    marginBottom: 20
  },
  welcomeText: {
    color: '#2980b9',
    fontWeight: '700'
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  logo: {
    width: 350,
    height: 170
  },
  infoContainer: {
    alignItems: 'center',
    bottom: 10
  },
  input: {
    backgroundColor: 'white',
    width: 300,
    height: 34,
    padding: 10,
    borderRadius: 20,
    marginBottom: 10
  },
  buttonContainer: {
    position: 'absolute',
    marginTop: 220,
    right: 55,
    width: 150,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2980b9',
    borderRadius: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18
  }
});
