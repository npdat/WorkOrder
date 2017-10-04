import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import { AppColors } from '@theme'

class FilterOption extends Component {

  constructor(props) {

    super(props);

    this.state = {
      isChecked: false
    };
  }

  render() {

    const {name} = this.props.data;
    const {container, checkBoxLabel} = styles;

    return (
      <View style={container}>
        <CheckBox
          title= {name}
          checked={this.state.isChecked}
          checkedColor= {AppColors.orange}

          textStyle={{
            fontWeight: '100',
            color: AppColors.gray,
            fontSize: 14
          }}

          containerStyle= {{
            backgroundColor: AppColors.white,
            borderColor: AppColors.white,
            margin: 0,
            padding:0

          }}
          onPress={() => this.setState({isChecked: !this.state.isChecked})}
        />

      </View>
    )
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
    fontSize: 15,
    color: AppColors.textPrimary,
    fontWeight: '200'
  }

})

export default FilterOption;
