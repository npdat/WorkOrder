import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TouchableHighlight,
  StyleSheet,
  Alert
} from 'react-native';
import { Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import moment from 'moment';
import { AppColors } from '@theme';


const getColorByPriorityCode = (code) => {

  let colorCode = null;

  switch(code) {
    case "0-IMM":
        colorCode = AppColors.red
        break;
    case "1-HIGH":
        colorCode = AppColors.workOrderStatus.high
        break;
    case "2-MED":
        colorCode = AppColors.workOrderStatus.medium
        break;

    case "3-LOW":
        colorCode = AppColors.workOrderStatus.low
        break;

    case "V.URGENT":
        colorCode = AppColors.workOrderStatus.high
        break;

    case "V-LOW":
        colorCode = AppColors.workOrderStatus.low
        break;

    default:
        colorCode = AppColors.gray;
  }

  return colorCode;
}

class WorkOrderItem extends Component {

  constructor(props) {
    super(props);
  }

  handleItemSelected = () => {
    Actions.workOrderDetail({workOrderItem: this.props.workOrder});
  }

  render() {
    const {
      title,
      street,
      rowFront,
      leftContainer,
      rightContainer,
      container
    } = styles;

    const {
      Description,
      PriorityCode,
      EstimatedFinishDate
    } = this.props.workOrder

    console.log(this.props.workOrder);

    return (
      <TouchableHighlight
        onPress={() => { this.handleItemSelected() }}

        style={rowFront}
        underlayColor={'orange'}
      >
        <View style={container}>
          <View style={leftContainer}>
            <Text style={title}>{Description}</Text>
            <Text style={street}>12 Jones St MarrickVille</Text>

            {renderTimeInfo(PriorityCode, EstimatedFinishDate)}
          </View>

          <View style={styles.rightContainer}>
            <Icon
              name='star-o'
              type='font-awesome'
              color={AppColors.gray}
              size={20}
              onPress={() => console.log('hello')}
            />
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

const renderTimeInfo = (priorityCode, estimateDate) => {
  return (
    <View style={{
      flex: 1.0,
      flexDirection: 'row',
      alignItems: 'baseline',
    }}>
      <Icon
        name='circle'
        type='font-awesome'
        color={getColorByPriorityCode(priorityCode)}
        size={12}
      />

      <Icon
        name='clock-o'
        type='font-awesome'
        color={AppColors.gray}
        size={12}
        style={{
          paddingLeft: 5
        }}
      />

      <Text style={styles.time}>  {estimateDate ? `Due ${moment(estimateDate).format("MMM Do YYYY")}` : `N/A`} </Text>
    </View>
  )
};

const styles = StyleSheet.create({

  container: {
    flex: 1.0,
    flexDirection: 'row',
    backgroundColor: AppColors.white
  },

  leftContainer: {
    flex: 0.9,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingLeft: 15,
    paddingTop: 15
  },

  rightContainer: {
    flex: 0.1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 15
  },

  title: {
    color: AppColors.textPrimary,
    fontSize: 18
  },

  street: {
    color: AppColors.textPrimary,
    fontSize: 13,
    marginTop: 5
  },

  time: {
    color: AppColors.textPrimary,
    fontSize: 12,
    marginTop: 5
  },

  rowFront: {
    alignItems: 'center',
    backgroundColor: '#CCC',
    marginBottom: 2,
    justifyContent: 'center',
    height: 100,
  }
})

export default WorkOrderItem;
