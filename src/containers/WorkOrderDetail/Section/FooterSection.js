import React, { Component } from 'react';
import moment from 'moment';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { AppSize, AppColors } from '@theme/';
import { getPriorityStringByCode, getPriorityColorByCode} from '../../../helper/Util';

export default class Footer extends Component {

    constructor(props) {
      super(props);
    }

    render = () => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderColor: '#d2d2d2', padding: 8, margin: 1, backgroundColor: 'white'}}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon
                        name='fiber-manual-record'
                        size={25}
                        color={getPriorityColorByCode(this.props.workOrderItem.PriorityCode)} />
                    <View style={{ flexDirection: 'column', paddingLeft: 10 }}>
                        <Text>{this.props.workOrderItem.EstimatedFinishDate ? moment(this.props.workOrderItem.EstimatedFinishDate).format("MMM Do YYYY") : `NA`}</Text>
                        <Text style={{color: getPriorityColorByCode(this.props.workOrderItem.PriorityCode)}}>{getPriorityStringByCode(this.props.workOrderItem.PriorityCode)}</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <View style = {{backgroundColor: '#FF9200', padding: 8, borderRadius: 5}}>
                        <Text style={{color: '#FFE1BA'}}>START</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
