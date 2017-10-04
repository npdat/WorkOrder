import React, { Component } from 'react';
import { Keyboard, View, Text, TextInput, TouchableOpacity, Alert, Button, StyleSheet, StatusBar, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';

const onButtonPress = () => {
  Alert.alert('Button has beem pressed!');
}

class LoginForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loading: false,
    };
  }

  userLogin (e) {
    this.setState({ loading: true });
    Keyboard.dismiss();
    this.props.loading();
    this.props.onLogin(this.state.username, this.state.password).then(() => {
      this.setState({ loading: false });
      if(this.props.isLoggedIn) {
        Actions.app();
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <TextInput style={styles.input}
          placeholder='Username'
          autoFocus={false}
          value={this.state.username}
          onSubmitEditing={() => this.passwordInput.focus()}
          returnKeyType='next'
          onChangeText={(text) => this.setState({ username: text })} />
        <TextInput style={styles.input}
            returnKeyType='go' ref={(input) => this.passwordInput = input}
            placeholder='Password'
            autoCapitalize='none'
            secureTextEntry
            value={this.state.password}
            onChangeText={(text) => this.setState({ password: text })} />
        <TouchableOpacity style={styles.buttonContainer} onPress={(e) => this.userLogin(e)}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(225,225,225,0.7)',
    marginBottom: 10,
    padding: 10,
    color: '#000'
  },
  buttonContainer: {
    backgroundColor: '#2980b6',
    paddingVertical: 15
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
  },
  loginButtion: {
    backgroundColor: '#2980b6',
    color: '#fff'
  },
});

export default LoginForm;
