import React, { Component } from 'react'
import {
  Animated,
  StyleSheet,
  View,
  Text,
} from 'react-native'
import {Actions} from 'react-native-router-flux';
import Section from '../ui/Section'

export default class MainSection extends Component{

  constructor(props){
    super(props)
  }

  render(){
    return (
      <View style={styles.mainSection}>
        <Section titleName="Work orders" menuTitle="VIEW WORK ORDERS" menuTitleClick={()=>Actions.workOrder()} titleIconBackgroundColor='#4ED4FE'
          menuItem={[
            {
              menuItemId : 0,
              menuItemName : 'ADD WORK ORDER',
              menuItemClick: () => {Actions.workOrder()}
            }]}
          expandedParts={() => (
            <View>
              <Text>
                This is an expanded field
              </Text>
            </View>
          )}/>

        <Section titleName="Assets" menuTitle="RECORD DEFECT" titleIconBackgroundColor='#37D279'
          menuItem={[{menuItemId : 0, menuItemName : 'ADD ASSET'},
            {menuItemId : 1, menuItemName : 'FIND ASSET'}]}
          expandedParts={() => (
            <View>
              <Text>
                This is an expanded field
              </Text>
            </View>
          )}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainSection : {
    flex: 1,
  }
});
