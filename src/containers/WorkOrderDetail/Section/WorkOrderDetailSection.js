import React, { Component } from 'react';
import moment from 'moment';
import { View, Text, Image, StyleSheet } from 'react-native';
import { getType } from '../../../helper/Util';

export default class WorkOrderDetailSection extends Component {

    constructor(props) {
      super(props);

    }

    render = () => {

        return (
            <View>
                <View style={styles.wrapContainer}>
                    <Image style={styles.image} source={require('../../../images/maps.png')} />
                    <View style={styles.wrapMapsContent}>
                        <View style={styles.itemMapsContent}>
                            <Text style={{ color: '#8a8a8a', paddingBottom: 5 }}>ESTIMATION START</Text>
                            <Text style={{ paddingBottom: 5 }} >{this.props.workOrderItem.EstimatedStartTime}</Text>
                            <Text>{this.props.workOrderItem.EstimatedStartDate ? moment(this.props.workOrderItem.EstimatedStartDate).format("MMM Do YYYY") : `NA`}</Text>
                        </View>
                        <View style={styles.itemMapsContent}>
                            <Text style={{ color: '#8a8a8a', paddingBottom: 5 }}>ESTIMATION FINISH</Text>
                            <Text style={{ paddingBottom: 5 }} >{this.props.workOrderItem.EstimatedFinishTime}</Text>
                            <Text>{this.props.workOrderItem.EstimatedFinishDate ? moment(this.props.workOrderItem.EstimatedFinishDate).format("MMM Do YYYY") : `NA`}</Text>
                        </View>
                    </View>
                </View>
                <View style = {{padding: 10}}>
                    <Text style = {{fontSize: 20, color: '#8a8a8a', marginTop: 10}}>Work Oder Details</Text>
                    <Text style = {{color: '#8a8a8a', marginTop: 10}}>DETAILS</Text>
                    <Text>{this.props.workOrderItem.Details}</Text>
                    <Text style = {{color: '#8a8a8a', marginTop: 10}}>PROJECT</Text>
                    <Text>{this.props.projectItem.Description}</Text>
                    <Text style = {{color: '#8a8a8a', marginTop: 10}}>WORK TYPE</Text>
                    <Text>{this.props.workTypeItem.Description}</Text>
                    <Text style = {{color: '#8a8a8a', marginTop: 10}}>TYPE</Text>
                    <Text>{getType(this.props.workOrderItem.Type)}</Text>
                </View>

                <View style = {{height: 8, backgroundColor: '#d2d2d2', margin: 10}} />
            </View>
        );
    }
}
var styles = StyleSheet.create({
    wrapContainer: {
        flexDirection: 'column',
        // justifyContent: 'center',
        backgroundColor: '#d2d2d2',
        height: 300,

    },
    wrapMapsContent: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
    },
    image: {
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'contain',
    },
    itemMapsContent: {
        flex: 0.5
    }
});
