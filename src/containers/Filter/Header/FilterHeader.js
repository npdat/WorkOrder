import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {AppColors} from '@theme';

class FilterHeader extends Component {

  render() {

    const {data} = this.props;

    const {container, headerTitle, buttonText} = styles;

    return (
      <View style={container}>
        <Text style={headerTitle}>{data}</Text>
        <TouchableOpacity
            onPress={() => {}}>
            <Text style={buttonText}>CLEAR FILTER</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1.0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: AppColors.darkGray
  },

  buttonText: {
    fontSize: 14,
    fontWeight: '100',
    paddingTop: 5,
    color: AppColors.orange
  }

})

export default FilterHeader;
