
import React, { Component } from 'react';
import {
  View,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { AppStyles, AppSizes } from '@theme/';
import { Spacer, Text, Button } from '@ui/';
import { Icon } from 'react-native-elements';

const MENU_BG_COLOR = '#ffffff';

const styles = StyleSheet.create({
  backgroundFill: {
    backgroundColor: MENU_BG_COLOR,
    height: AppSizes.screen.height,
    //width: AppSizes.screen.width,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  container: {
    position: 'relative',
    flex: 1,
  },
  menuContainer: {
    flex: 1,
    left: 0,
    right: 0,
    backgroundColor: MENU_BG_COLOR,
  },

  // Main Menu
  menu: {
    flex: 3,
    left: 0,
    right: 0,
    backgroundColor: MENU_BG_COLOR,
    padding: 20,
    paddingTop: AppSizes.statusBarHeight + 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
    paddingBottom: 10,
  },
  menuItem_text: {
    fontSize: 16,
    lineHeight: parseInt(16 + (16 * 0.5), 10),
    fontWeight: '500',
    marginTop: 14,
    marginBottom: 8,
    color: '#000000',
  },

  // Menu Bottom
  menuBottom: {
    flex: 1,
    left: 0,
    right: 0,
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  menuBottom_text: {
    color: '#000',
  },
});

class Menu extends Component {
  constructor (props) {
    super(props);
  }

   /**
   * On Press of any menu item
   */
  onPress = (action) => {
    if (action) action();
  }

  /**
   * On Logout Press
   */
  logout = () => {
    if (this.props.logout) {
      this.props.logout();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.user.isLoggedIn) {
      Actions.login();
    }
  }

  render = () => (
    <View style={[styles.container]}>
      <View style={[styles.backgroundFill]} />

      <View style={[styles.menuContainer]}>
        <View style={[styles.menu]}>
          <TouchableOpacity onPress={() => this.onPress(Actions.home)}>
            <View style={[styles.menuItem]}>
              <Icon
                  name='home'
                  color='#000'
                  size={20}
                  style={{marginTop : 5, marginRight: 5}}/>
              <Text style={[styles.menuItem_text]}>
                HOME
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.menuBottom]}>
          {this.props.user ?
            <View>
              <Text
                style={[
                  styles.menuBottom_text,
                  AppStyles.textCenterAligned,
                ]}
              >
                Logged in as:{'\n'}
                {this.props.user.username}
              </Text>

              <Spacer size={10} />

              <View style={[AppStyles.paddingHorizontal, AppStyles.paddingVerticalSml]}>
                <Button small title={'Log Out'} onPress={this.logout} />
              </View>
            </View>
          :
            <View style={[AppStyles.paddingHorizontal, AppStyles.paddingVerticalSml]}>
              <Button small title={'Log In'} onPress={() => this.onPress(Actions.login)} />
            </View>
          }
        </View>
      </View>
    </View>
  )
}

export default Menu;
