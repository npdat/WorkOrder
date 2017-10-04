import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'


export default class MapWorkOrderView extends Component {
  constructor(props) {
    super(props)
  }


  render(){

    return (
      <View><TouchableOpacity
          onPress={() => {}}>
          <Icon
            name='back'
            type='font-awesome'
            color= {AppColors.gray}
            size={20}
            onPress={() => {

              Actions.back();
            }}
          />
      </TouchableOpacity></View>
    );
  }
}
