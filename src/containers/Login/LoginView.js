import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, KeyboardAvoidingView, Alert } from 'react-native';
import LoginForm from './LoginForm';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Loading from '@components/genaral/Loading';

class Login extends Component {
  constructor (props) {
    super(props);
  }

  render() {

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <View style={styles.loginContainer}>
            <Image resizeMode="contain" style={styles.logo}
              source={require('../../images/logo.png')} />
          </View>
          <View style={styles.formContainer}>
            <LoginForm loading={this.props.actions.loading} isLoggedIn={this.props.isLoggedIn} onLogin={this.props.actions.login}/>
            <Text style={styles.resultMsg}>{this.props.resultMsg}</Text>
          </View>
          { this.props.isLoading &&
            <Loading transparent={true} text='Wating ...' />
          }
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  resultMsg: {
    color: 'red',
    marginLeft: 20,
  },
  loginContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  logo: {
    position: 'absolute',
    width: 300,
    height: 100
  },
  title: {
    color: '#fff',
    marginTop: 120,
    width: 180,
    textAlign: 'center',
    opacity: 0.9
  },
  formContainer: {
    flexGrow: 1,
  },
});

export default Login;
