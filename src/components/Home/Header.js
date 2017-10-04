import React, {Component} from 'react';
import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import {
  SocialIcon, Icon
} from 'react-native-elements';

export default class ScrollableHeader extends Component {

	constructor(props) {
	  super(props);
	}

  userLogout(e) {
    this.props.onLogout();
  }

  render() {
    return (
      <Animated.View style={[styles.header, {height: this.props.headerHeight}]}>

          <TouchableOpacity
              onPress={() => {}}>
            <Icon
                name='menu'
                color='#ffffff'
                size={30}
                style={{marginLeft : 10, marginTop : 10}}/>
          </TouchableOpacity>

          <View style={styles.homeTitleContainer}>
            <Animated.Text
                style={[styles.homeTitle, {height: this.props.titleHeight}]}>Home</Animated.Text>
          </View>

          <View style={styles.centerContainer}>
            <TouchableOpacity
                onPress={() => {}}>
              <Icon
                  raised
                  name={'sync'}
                  color={'#000'}
                  size={15}
                  containerStyle={{
                    backgroundColor: '#FFFFFF',
                  }}
                    />
            </TouchableOpacity>
          </View>

          <View style={styles.rightContainer}>
            <TouchableOpacity
                onPress={() => {}}>
              <Icon
                  name='ios-more'
                  type='ionicon'
                  color='#fff'
                  size={35}/>
            </TouchableOpacity>
            <View style={styles.homeTitleContainer}>
              <Animated.Text
                style={[styles.onlineText, {height: this.props.titleHeight}]}>Online</Animated.Text>
            </View>
          </View>

  		</Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
  	position : 'absolute',
    justifyContent : 'flex-start',
  	top: 0,
  	left: 0,
  	right: 0,
  	backgroundColor: '#797979',
  	overflow: 'hidden',
    flex : 1, flexDirection : 'row', alignItems : 'flex-start'
  },
	title: {
	  backgroundColor: 'transparent',
	  color: 'white',
	  fontSize: 18,
	},
  homeTitleContainer: {
    flex : 1,
    alignSelf : 'stretch',
    justifyContent : 'flex-end',
    paddingBottom : 10,
  },
  homeTitle: {
    color : 'white',
    fontSize : 18,
    marginLeft : 5,
    marginBottom : 5
  },
  centerContainer: {
    flex: 3,
    alignItems : 'flex-end',
  },
  rightContainer: {
    flex: 1,
    
    flex : 1,
    paddingRight: 10,
  },
  onlineText: {
    color : 'white',
    fontSize : 14,
    paddingBottom : 10,
  }
});
