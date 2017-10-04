
import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  Alert,
  StatusBar,
  ScrollView,
  StyleSheet,
  Button
} from 'react-native';
import {Icon} from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

import { AppColors } from '@theme';
import FilterList from './FilterList';
import FilterMoreOptions from './FilterMoreOptions';

export default class FilterView extends Component {
  constructor(props) {
    super(props)
  }


  render(){

    const isIosDevice = Platform.OS === 'ios' ? true : false;

    return (
      <View style={{flex: 1}}>
        <StatusBar
            backgroundColor= {AppColors.darkGray}
            barStyle='light-content'
            translucent= {false}
        />
        {
          isIosDevice &&
          (
            <View style={{
              backgroundColor: AppColors.darkGray,
              height: 20
            }}>
            </View>
          )
        }

        {this._renderHeader()}
        <ScrollView>

          {this._renderWhenFilter()}

          <View style={styles.lineBreak}/>

          {this._renderFilterOptions()}

          {this._renderMoreOptions()}

        </ScrollView>

      </View>
    );
  }

  _renderHeader() {

    return (
      <View
        style= {{
          height: 60,
          width: null,
          backgroundColor: AppColors.gray,
          flexDirection: 'row'
        }}
      >
        <View style={styles.leftContainer}>
          <TouchableOpacity
              onPress={() => {
                Actions.pop();
              }}>

              <Icon
                name='arrow-left'
                type='font-awesome'
                color= {AppColors.white}
                size={25}
                style={{marginLeft : 10, marginTop : 5}}
              />
          </TouchableOpacity>
          <Text style={styles.titleText} maxLength={2}>Filter</Text>
        </View>
        <View style={styles.rightContainer}>


          <TouchableOpacity
            onPress={() => {}}>
            <Text style={styles.subTitle}>RESET</Text>
          </TouchableOpacity>

          <TouchableOpacity
              onPress={() => {}}>
            <Icon
                name='check'
                color='#ffffff'
                size={25}
                style={{marginRight : 10, marginTop : 5}}/>
          </TouchableOpacity>
        </View>

      </View>
    );
  }

  _renderFilterOptions() {
    return (
      <FilterList />
    )
  }

  _renderWhenFilter() {

    return (
      <View style={{
        backgroundColor: AppColors.white,
        height: 80,
        padding: 15
      }}>
        <Text style={styles.headerTitle}>When</Text>
        <Text style={styles.textDueTo}>Due today (July 17, 2017)</Text>
      </View>
    )
  }

  _renderMoreOptions() {

    return (
      <FilterMoreOptions />
    )
  }
}

const styles = StyleSheet.create({

  lineBreak: {
    height: 0.5,
    margin: 15,
    backgroundColor: AppColors.lightGray
  },

  filterContainer: {
    flex: 1.0,
    flexDirection: 'row'
  },

  h1Style: {
    fontSize: 22,
    fontWeight: '300',
    color: AppColors.textPrimary
  },

  h2Style: {
    fontSize: 14,
    fontWeight: '100',
    marginTop: 10,
    color: AppColors.gray
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: AppColors.darkGray
  },

  textDueTo: {
    fontSize: 16,
    fontWeight: '300',
    marginTop: 5,
    color: AppColors.gray
  },

  buttonStyle: {

  },

  leftContainer: {
    flex: 0.6,
    flexDirection: 'row',
    alignItems: 'center',
  },

  rightContainer: {
    flex: 0.4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  titleText: {
    fontSize: 24,
    marginLeft: 10,
    color: "#FFFFFF"
  },

  subTitle: {
    fontSize: 16,
    marginLeft: 10,
    color: "#FFFFFF"
  }
})
