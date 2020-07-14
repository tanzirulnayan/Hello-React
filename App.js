import React, {Component} from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
  Alert,
} from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.login = this.login.bind(this);
    this.state = {};
    this.setState();
    this.state.customStyle = {
      color: '#E91E63',
    };
    setInterval(() => {
      if (this.state.customStyle.color === '#E91E63') {
        this.setState({
          customStyle: {
            color: '#4CAF50',
          },
        });
      } else {
        this.setState({
          customStyle: {
            color: '#E91E63',
          },
        });
      }
    }, 1000);
  }

  login = () => {
    // const username = this._username._lastNativeText;  //uncontrolled input
    // const password = this._password._lastNativeText;  //uncontrolled input

    // Alert.alert(
    //   'Chill! Pera nai. Login hobe. Relax!',
    //   'Username: ' +
    //     this.state.username +
    //     '    ' +
    //     'Password: ' +
    //     this.state.password,
    //   // 'Okay',
    // );

    // console.warn(
    //   'Username: ' + this.state.username + '    Password: ' + this.state.password,
    // );

    if (this.state.username === 'nayan' && this.state.password === '1234') {
      console.log('Login successful!');
    } else if (
      this.state.username !== 'nayan' &&
      this.state.password !== '1234'
    ) {
      console.warn('Invalid username & password!');
    } else if (
      this.state.username !== 'nayan' &&
      this.state.password === '1234'
    ) {
      console.warn('Invalid username!');
    } else if (
      this.state.username === 'nayan' &&
      this.state.password !== '1234'
    ) {
      console.warn('Invalid password!');
    } else {
      console.warn('Invalid login credentials!');
    }
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/45/AIUB_whole_logo.png/160px-AIUB_whole_logo.png',
            }}
          />
          <Text style={styles.title}>
            American International University - Bangladesh
          </Text>
          <Text style={[styles.title, this.state.customStyle]}>
            Yo, man! Login korba naki?
          </Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            placeholder="Username"
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="next"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.textInput}
            // ref={input => (this._username = input)}  //uncontrolled input
            defaultValue={this.state.username}
            onChangeText={text => this.setState({username: text})}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="go"
            secureTextEntry={true}
            style={styles.textInput}
            // ref={input => (this._password = input)}  //uncontrolled input
            defaultValue={this.state.password}
            onChangeText={text => this.setState({password: text})}
          />
          <TouchableOpacity style={styles.buttonContainer} onPress={this.login}>
            <Text style={styles.buttonText}>LOG IN</Text>
          </TouchableOpacity>
          {/*<Button title="Login" onPress={this.login} />*/}
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(94,92,230,1.0)',
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  logo: {
    height: 100,
    width: 100,
    marginBottom: 10,
  },
  title: {
    color: '#FFF',
    fontSize: 16,
    marginTop: 10,
    width: 200,
    textAlign: 'center',
    opacity: 0.9,
  },
  buttonContainer: {
    backgroundColor: 'rgba(88,86,214,1.0)',
    paddingVertical: 15,
    marginBottom: 20,
    shadowColor: 'white',
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#E91E63',
  },
  reactLogo: {
    height: 50,
    width: 50,
    marginTop: 150,
    marginBottom: 50,
  },
  textInput: {
    height: 40,
    width: 300,
    backgroundColor: 'rgba(255,255,255,0.1)',
    color: '#FFF',
    borderWidth: 0,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
