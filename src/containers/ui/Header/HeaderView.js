import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { AppColors } from '@theme';
import { Icon } from 'react-native-elements';

class Header extends Component {
  constructor(props) {
    debugger;
    super(props);
  }

  render() {
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
              onPress={this.props.toggleSideMenu}>
            <Icon
                name='menu'
                color='#ffffff'
                size={30}
                style={{marginLeft : 10, marginTop : 5}}/>
          </TouchableOpacity>
          <Text style={styles.titleText} maxLength={2}>{this.props.headerText}</Text>
        </View>

        <View style={styles.rightContainer}>
          <TouchableOpacity
              onPress={() => {}}>
            <Icon
                name='sync'
                color='#ffffff'
                size={25}
                style={{marginRight : 40, marginTop : 5}}/>
          </TouchableOpacity>
          {
            this.props.isWorkOrderPage &&
              <TouchableOpacity
                  onPress={() => {}}>
                <Icon
                    name='add'
                    color='#ffffff'
                    size={25}
                    style={{marginRight : 10, marginTop : 5}}/>
              </TouchableOpacity>
          }
          {
            this.props.isWorkOrderPage &&
              <TouchableOpacity
                  onPress={() => {}}>
                <Icon
                    name='search'
                    color='#ffffff'
                    size={25}
                    style={{marginRight : 10, marginTop : 5}}/>
              </TouchableOpacity>
          }
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
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
    justifyContent: 'flex-end'
  },
  titleText: {
    fontSize: 24,
    marginLeft: 10,
    color: "#FFFFFF"
  },
});

export default Header;
