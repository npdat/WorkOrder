import React, {
	Component,
} from 'react';
import {
	AppRegistry,
	ListView,
	StyleSheet,
	Text,
	TouchableOpacity,
	TouchableHighlight,
	View,
	Alert
} from 'react-native';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';
import {AppColors} from "@theme";
import WorkOrderItem from './WorkOrderItem';
import DumpWorkOrderList from '../../assets/DumpWorkOrderListData.json';

const INIT_DATA = DumpWorkOrderList;

class ListWorkOrder extends Component {

	constructor(props) {
		super(props);
		this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			basic: true,
			listViewData: this.props.workOrderList
		};
	}

	deleteRow(secId, rowId, rowMap) {
		rowMap[`${secId}${rowId}`].closeRow();
		const newData = [...this.state.listViewData];
		newData.splice(rowId, 1);
		this.setState({listViewData: newData});
	}

	handleTapOnRow(data) {
		Alert.alert('Such a lovely day')
	}

	render() {
		return (
			   <View style={styles.container}>
					<SwipeListView
						dataSource={this.ds.cloneWithRows(this.state.listViewData)}
						renderRow={renderItem}

						renderHiddenRow={ (data, secId, rowId, rowMap) => (
							<View style={styles.rowBack}>
								<TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnRight]}>
									<View>
										<Text style={styles.backTextWhite}>START</Text>
									</View>
								</TouchableOpacity>
							</View>
						)}
						leftOpenValue= {0}
						rightOpenValue={-100}
					/>
        </View>
		);
	}
}

const renderItem = (data) => {
	return (
		<WorkOrderItem workOrder={data} onItemSelected={this.handleTapOnRow}/>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: AppColors.borderListView,
		flex: 1
	},

	standalone: {
		marginTop: 30,
		marginBottom: 30,
	},
	standaloneRowFront: {
		alignItems: 'center',
		backgroundColor: '#CCC',
		justifyContent: 'flex-start',
		height: 100,
	},
	standaloneRowBack: {
		alignItems: 'center',
		backgroundColor: '#8BC645',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 15
	},
	backTextWhite: {
		color: '#FFF',
		fontWeight: 'bold'
	},

	rowBack: {
		alignItems: 'center',
		backgroundColor: '#DDD',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 15,
		marginBottom: 2

	},
	backRightBtn: {
		alignItems: 'center',
		bottom: 0,
		justifyContent: 'center',
		position: 'absolute',
		top: 0,
		width: 100
	},
	backRightBtnLeft: {
		backgroundColor: 'blue',
		right: 75
	},
	backRightBtnRight: {
		backgroundColor: AppColors.orange,
		right: 0
	},
	controls: {
		alignItems: 'center',
		marginBottom: 30
	},
	switchContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginBottom: 5
	},
	switch: {
		alignItems: 'center',
		borderWidth: 1,
		borderColor: 'black',
		paddingVertical: 10,
		width: 100,
	}
});

export default ListWorkOrder;
