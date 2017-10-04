import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert
} from 'react-native';
import { Icon } from 'react-native-elements';
import { CheckBox } from 'react-native-elements';
import { AppColors } from '@theme'

class FilterOptionsStyle2 extends Component {

  constructor(props) {

    super(props);

    this.state = {
      isChecked: false
    };
  }



  render() {

    const {name, priority} = this.props.data;
    const {container, checkBoxLabel} = styles;

    return (
      <View style={container}>
        <CheckBox
          checked={this.state.isChecked}
          checkedColor= {AppColors.orange}

          textStyle={{
            fontWeight: '100',
            color: AppColors.gray,
            fontSize: 14
          }}

          containerStyle= {{
            width: 40,
            backgroundColor: AppColors.listItemBackground,
            padding: 0,
            margin: 0,
            borderWidth: 1,
          }}
          onPress={() => this.setState({isChecked: !this.state.isChecked})}
        />

        <Icon
          name='circle'
          type='font-awesome'
          color= {this._mappingPrioryToColor(priority)}
          size={20}
          style={{marginLeft : -20, marginTop : 0, marginRight: 5}}
        />

        <Text style={checkBoxLabel}>{name}</Text>
      </View>
    )
  }

  _mappingPrioryToColor(priority) {

    switch (priority) {
      case 'high':
        return AppColors.workOrderStatus.high

      case 'medium':
        return AppColors.workOrderStatus.medium

      case 'low':
        return AppColors.workOrderStatus.low
    }
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1.0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 10,
    marginBottom: 10
  },

  checkBoxLabel: {
    fontSize: 14,
    color: AppColors.gray,
    fontWeight: '200'
  }
})

export default FilterOptionsStyle2;
