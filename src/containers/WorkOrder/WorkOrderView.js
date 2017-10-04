import React, { Component } from 'react';

import {
  View,
  Text,
  StatusBar,
  Platform,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator
} from 'react-native';

import { Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import ListWorkOrder from './ListWorkOrder';
import { AppColors } from '@theme';
import { getWorkOrderDetail } from '../../helper/C2Service';
import Header from '../ui/Header/HeaderContainer';

class WorkOrderView extends Component {

  constructor(props) {

    super(props);

    console.log("constructor.....")
    this.state = {
      workOrderList: [],
      loading: true
    };
  }

  componentDidMount() {

    this.setState({
      loading: true
    })

    // Check Existing

    // Load Local

    // Call API
    getWorkOrderDetail()
    .then((json) => {
      console.log(json)
      this.setState({
        workOrderList: json.Items,
        loading: false
      });
    })
    .catch((err) => this.setState({
      loading: false
    }))
  }



  render() {

    const isIosDevice = Platform.OS === 'ios' ? true : false;
    const { workOrderList } = this.state;


    return (
      <View style={{flex: 1}}>
        <StatusBar
            backgroundColor={AppColors.darkGray}
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

        <Header headerText="Work Order" isWorkOrderPage={true} />

        <ScrollView>

          { (workOrderList.length > 0) && renderFilterSection(workOrderList.length) }
          { (workOrderList.length > 0) && <ListWorkOrder workOrderList={workOrderList}/>}

        </ScrollView>
        { this.state.loading &&
          <View style={[styles.loading]}>
              <ActivityIndicator size='large' />
          </View>
        }

      </View>

    )
  }
}

const renderFilterSection = (count) => {

  const { h1Style, h2Style, filterContainer }  = styles;

  return (
    <View style={{
      height: 80,
      backgroundColor: AppColors.listItemBackground,
      padding: 15
    }}>
      <View style={filterContainer}>

        <View style={{
          flex: 0.7
        }}>
          <Text style={h1Style}>{count} in Inbox </Text>
        </View>

        <View style={{
          flex: 0.3,
          flexDirection: 'row',
          justifyContent: 'flex-end'
        }}>
          <TouchableOpacity
              onPress={() => {}}>
              <Icon
                name='filter'
                type='font-awesome'
                color= {AppColors.gray}
                size={20}
                onPress={() => {

                  Actions.filter();
                }}
              />
          </TouchableOpacity>

          <TouchableOpacity
              onPress={() => {}}>
              <Icon
                name='map-marker'
                type='font-awesome'
                color= {AppColors.gray}
                size={20}
                style={{
                  marginLeft: 20
                }}
                onPress={() => console.log('hello')}
              />
          </TouchableOpacity>
        </View>

      </View>
      <Text style={h2Style}>Due today, July 17 2017 | In Brisbane Area</Text>

    </View>
  );
}

const renderHeader = () => {
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
            onPress={() => {}}>
          <Icon
              name='menu'
              color='#ffffff'
              size={30}
              style={{marginLeft : 10, marginTop : 5}}/>
        </TouchableOpacity>
        <Text style={styles.titleText} maxLength={2}>WorkOrder</Text>
      </View>

      <View style={styles.rightContainer}>

        <TouchableOpacity
            onPress={() => {}}>
          <Icon
              name='refresh'
              color='#ffffff'
              size={25}
              style={{marginRight : 10, marginTop : 5}}/>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={() => {}}>
          <Icon
              name='add'
              color='#ffffff'
              size={25}
              style={{marginRight : 10, marginTop : 5}}/>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={() => {}}>
          <Icon
              name='search'
              color='#ffffff'
              size={25}
              style={{marginRight : 10, marginTop : 5}}/>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

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

  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default WorkOrderView;
