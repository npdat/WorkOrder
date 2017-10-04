import React, { Component } from 'react';
import { View, Text, StatusBar, Platform, ScrollView } from 'react-native';
import { AppColors } from '@theme';
import Header from './Section/HeaderSection';
import WorkOrderDetailSection from './Section/WorkOrderDetailSection';
import AssetsSection from './Section/AssetsSection';
import NoteSection from './Section/NoteSection';
import Footer from './Section/FooterSection';
import PhotoSession from './Section/PhotoSection';
import { lookupProject, lookupWorkType } from '../../helper/C2Service';

export default class WorkOrderDetail extends Component {

    componentDidMount() {
      // Trigger call API at here
      lookupProject(this.props.workOrderItem.WorkSystemName, this.props.workOrderItem.ProjectCode)
      .then((responseJson) => {
        if (responseJson.Items.length > 0) {
          this.setState({
            projectItem: responseJson.Items[0]
          });
        }
      })
      .catch((err) => {

        console.log(err);
      })

      lookupWorkType(this.props.workOrderItem.WorkSystemName,this.props.workOrderItem.WorkTypeCode)
      .then((responseJson) => {
        if (responseJson.Items.length > 0) {
          this.setState({
            workTypeItem: responseJson.Items[0]
          });
        }

      })
      .catch((err) => {
        console.log(err);
      })
    }

    constructor(props) {

      super(props);

      //this.props.workOrderItem
      this.state = {
        projectItem: {},
        workTypeItem: {},
      }

    }

    render() {
        const isIosDevice = Platform.OS === 'ios' ? true : false;

        return (
            <View style={{ backgroundColor: '#ededed', flex: 1 }}>
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
                <Header title={this.props.workOrderItem.Description} street={'12 Jones St Marrickville'}/>
                <ScrollView>
                    <WorkOrderDetailSection
                    workOrderItem={this.props.workOrderItem}
                    projectItem={this.state.projectItem}
                    workTypeItem={this.state.workTypeItem}
                    />
                    <AssetsSection />
                    <NoteSection />
                    <PhotoSession />
                </ScrollView>
                <Footer workOrderItem={this.props.workOrderItem}/>
            </View>
        );
    }
}
