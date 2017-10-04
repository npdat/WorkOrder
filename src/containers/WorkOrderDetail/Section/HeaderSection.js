import React, { Component } from 'react';
import { Animated, View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { Icon } from 'react-native-elements';
import { AppSize, AppColors } from '@theme/';
import { Actions } from 'react-native-router-flux';
export default class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Animated.View style={AppColors.header}>
              <View style={{ flexDirection: 'column', justifyContent: 'space-around', flex: 1}}>
                <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                  <View>
                    <TouchableOpacity onPress={() => { this.backSelected()}}>
                        <Icon
                            name='keyboard-backspace'
                            size={40}
                            color={AppColors.color}>
                        </Icon>
                    </TouchableOpacity>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => { }}>
                        <Icon
                            name='mode-edit'
                            size={25}
                            color={AppColors.color}>
                        </Icon>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                        <Icon
                            name='ios-more'
                            type='ionicon'
                            size={35}
                            color={AppColors.color}
                            containerStyle={{
                                paddingLeft: 20
                            }}>
                        </Icon>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{ paddingLeft: 50, marginBottom: 5 }}>
                    <Text style={{ fontSize: 25, color: AppColors.darkGray }}>{this.props.title}</Text>
                    <Text style={{ color: '#b5b5b5' }}>{this.props.street}</Text>
                </View>
              </View>
            </Animated.View>
        );
    }

    backSelected = () =>{
        debugger;
        Actions.workOrder();
    }
}
