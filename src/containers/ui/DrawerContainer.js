import * as SideMenuActions from '@redux/sidemenu/actions';
import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import { connect } from 'react-redux';
import Drawer from 'react-native-drawer';
import { DefaultRenderer } from 'react-native-router-flux';
import { AppSizes } from '@theme/';
import Menu from './Menu/MenuContainer';

// What data from the store shall we send to the component?
const mapStateToProps = state => ({
  sideMenuIsOpen: state.sideMenu.isOpen,
});

// Any actions to map to the component?
const mapDispatchToProps = {
  toggleSideMenu: SideMenuActions.toggle,
  closeSideMenu: SideMenuActions.close,
};

const drawerStyles = {
  drawer: { shadowColor: 'gray', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 0},
  mainOverlay: {backgroundColor: 'black', opacity: 0,},
  drawerOverlay: {opacity: 0}
}

class SideMenu extends Component {
  constructor(props) {
    super(props);
    debugger;
  }

  static defaultProps = {
    sideMenuIsOpen: null,
  }

  onSideMenuChange = (open) => {
    if (open !== this.props.sideMenuIsOpen)
    {
      this.props.toggleSideMenu();
    }
  }

  render() {
    const state = this.props.navigationState;
    const children = state.children;
    const menu = <Menu />

    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        type="overlay"
        open={this.props.sideMenuIsOpen}
        onOpenStart={this.onSideMenuChange}
        content={menu}
        tapToClose={true}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        panOpenMask={0.02}
        closedDrawerOffset={-3}
        styles={drawerStyles}
        captureGestures={true}
        tweenDuration={250}
        tweenEasing="easeOutCirc"
        tweenHandler={(ratio) => ({
          main: { opacity: Math.max(0.54, 1 - ratio) },
          drawer: { opacity: 1 },
          mainOverlay: { opacity: ratio / 2 }
        })}
      >
        <View style={{ backgroundColor: '#000', flex: 1 }}>
          <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
        </View>
      </Drawer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
