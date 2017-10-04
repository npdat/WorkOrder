import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'

import {
  Card,
  Button,
  Icon
} from 'react-native-elements'

export default class AssetsSection extends Component{

  render(){
    return (
      <Card
        containerStyle={styles.cardContainer}>
        <View style={styles.titleRow}>
          <View style={styles.titleFirstRow}>
            <TouchableOpacity
              onPress={() => {}}>
              <Icon
                raised
                name='ios-list-box-outline'
                color='white'
                type='ionicon'
                size={20}
                containerStyle={{
                  backgroundColor: '#34f96c',
                }}
                />
            </TouchableOpacity>
          </View>
          <View style={styles.titleSecondRow}>
            <Text style={styles.titleText}>Assets</Text>
            <Text style={styles.titleSyncText}>Synced 1 min ago</Text>
          </View>
          <View style={styles.titleThirdRow}>
            <TouchableOpacity
              onPress={() => {}}>
              <Icon
                name='ios-arrow-dropdown-circle-outline'
                color='gray'
                type='ionicon'
                size={15}/>
            </TouchableOpacity>
          </View>
        </View>
      <View style={styles.menuTitle}>
        <Text style={styles.menuTitleText}>RECORD DEFECT</Text>
      </View>
      <View style={styles.menuItem}>
        <TouchableOpacity
            onPress={() => {}}>
          <Text style={styles.menuItemText}>ADD ASSET</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menuLastItem}>
        <TouchableOpacity
            onPress={() => {}}>
          <Text style={styles.menuItemText}>FIND ASSET</Text>
        </TouchableOpacity>
      </View>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  cardContainer : {
    backgroundColor:'#f4f6f9',
    borderRadius : 5,
    padding : -15,
    paddingTop : 15,
  },
  titleRow : {
    flexDirection : 'row',
    marginBottom : 15,
  },
  titleFirstRow : {
    flex : 0.2,
    justifyContent : 'center',
    alignItems : 'center',
  },
  titleSecondRow : {
    flex : 0.7,
    justifyContent : 'center',
    paddingLeft : 10,
  },
  titleThirdRow : {
    flex : 0.1,
    justifyContent : 'center',
    alignItems : 'center',
  },
  titleText : {
    fontSize : 15,
    fontWeight : 'bold'
  },
  titleSyncText : {
    fontSize : 13,
  },
  menuTitle : {
    padding : 15,
    paddingLeft : 10,
    backgroundColor : '#fff',
    borderBottomColor : '#000',
    borderBottomWidth : 1,
  },
  menuItem : {
    paddingLeft : 10,
    padding : 15,
    backgroundColor : '#fff',
    borderBottomColor : '#000',
    borderBottomWidth : 1,
  },
  menuLastItem : {
    paddingLeft : 10,
    padding : 15,
    backgroundColor : '#fff',
  },
  menuTitleText : {
    fontSize : 16,
    fontWeight : 'bold',
  },
  menuItemText : {
    fontSize : 15,
  }
})
