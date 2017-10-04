import PropTypes from 'prop-types'
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

import * as Animatable from 'react-native-animatable';

export default class AssetsSection extends Component{
  static propTypes = {
    titleName : PropTypes.string.isRequired,
    titleSyncTime : PropTypes.string,
    titleIcon : PropTypes.string,
    titleIconType : PropTypes.string,
    titleIconColor : PropTypes.string,
    titleIconBackgroundColor : PropTypes.string,
    menuTitle : PropTypes.string.isRequired,
    menuTitleClick : PropTypes.func,
    menuItem : PropTypes.arrayOf(
      PropTypes.shape({
        menuItemId : PropTypes.number.isRequired,
        menuItemName : PropTypes.string.isRequired,
        menuItemClick : PropTypes.func,
      }).isRequired,
    ),
    expandedParts : PropTypes.func,
	}

  constructor(props){
    super(props)
    this.state = {
      ...this.state,
      isExpanded : false,
    }
  }

  _expandedArrowClick(){
    this.setState(previousState => {
      return { isExpanded : !previousState.isExpanded,}
    });
  }

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
                name={this.props.titleIcon ? this.props.titleIcon : 'ios-list-box-outline'}
                color={this.props.titleIconColor ? this.props.titleIconColor : 'white'}
                type={this.props.titleIconType ? this.props.titleIconType : 'ionicon'}
                size={20}
                containerStyle={{
                  backgroundColor: this.props.titleIconBackgroundColor ? this.props.titleIconBackgroundColor : '#4ED4FE',
                }}
                />
            </TouchableOpacity>
          </View>
          <View style={styles.titleSecondRow}>
            <Text style={styles.titleText}>{this.props.titleName}</Text>
            <Text style={styles.titleSyncText}>Synced {this.props.titleSyncText ? this.props.titleSyncText : '0 min'} ago</Text>
          </View>
          <View style={styles.titleThirdRow}>
            <TouchableOpacity
              onPress={ () => {this._expandedArrowClick()}}>
              <View style={styles.circle}>
                <Icon
                  name={this.state.isExpanded ? 'ios-arrow-up' : 'ios-arrow-down'}
                  color='#A9A9A9'
                  type='ionicon'
                  size={20}/>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      {
        this.props.expandedParts && this.state.isExpanded ? (
          <Animatable.View animation='fadeIn' duration={2000}>
            {this.props.expandedParts()}
          </Animatable.View>
        ) : null
      }
      <View style={this.props.menuItem ? styles.menuTitle : styles.menuTitleWithNoBorder}>
        <TouchableOpacity
            onPress={() => {this.props.menuTitleClick()}}>
          <Text style={styles.menuTitleText}>{this.props.menuTitle}</Text>
        </TouchableOpacity>
      </View>
      {
        this.props.menuItem && this.props.menuItem.map( (item) => (
          <View key={item.menuItemId} style={item.menuItemId == this.props.menuItem.length - 1 ? styles.menuLastItem : styles.menuItem}>
            <TouchableOpacity>
              <Text style={styles.menuItemText}>{item.menuItemName}</Text>
            </TouchableOpacity>
          </View>
        ))
      }
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
    borderBottomColor : '#D6D6D6',
    borderBottomWidth : 1,
  },
  menuTitleWithNoBorder : {
    padding : 15,
    paddingLeft : 10,
    backgroundColor : '#fff',
  },
  menuItem : {
    paddingLeft : 10,
    padding : 15,
    backgroundColor : '#fff',
    borderBottomColor : '#D6D6D6',
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
    color: '#717171'
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 20/2,
    backgroundColor: '#DCDCDC'
}
})
