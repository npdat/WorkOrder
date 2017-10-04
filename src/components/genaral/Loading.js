import React, { Component } from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { Spacer, Text } from '@ui/';
import { AppStyles } from '@theme/';

class Loading extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={[styles.loading,
          this.props.transparent && { backgroundColor: 'rgba(255,255,255,0.75)' },
        ]}
      >
        <ActivityIndicator
          animating
          size={'large'}
          color={this.props.transparent ? '#000' : '#AAA'}
        />

        <Spacer size={10} />

        {!!this.props.text && <Text>{this.props.text}</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Loading;
