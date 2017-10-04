import React from 'react';
import { Text, Button } from 'react-native';
import { Actions, Scene, ActionConst } from 'react-native-router-flux';
import Home from '../containers/Home/HomeContainer';
import Login from '../containers/Login/LoginContainer';
import WorkOrder from '../containers/WorkOrder/WorkOrderContainer';
import WorkOrderDetail from '../containers/WorkOrderDetail/WorkOrderDetailContainer';
import Filter from '../containers/Filter/FilterContainer';
import { AppConfig } from '@constants/';
import { AppStyles, AppSizes } from '@theme/';
import SideMenu from '../containers/ui/DrawerContainer';
import { NavbarMenuButton } from '../containers/ui/NavbarMenuButton/NavbarMenuButtonView';

const Scenes = Actions.create(
  <Scene key='root'>
      <Scene key='login' title='Login' component={Login} hideNavBar initial type={ActionConst.REPLACE}/>
      <Scene key='app' type={ActionConst.RESET}>
        <Scene key='drawer' component={SideMenu} initial={'main'}>
          <Scene key='main'>
            <Scene key='home' hideNavBar component={Home} title='Home'/>
            <Scene key='workOrder' title='WorkOrder' component={WorkOrder} hideNavBar type={ActionConst.REPLACE} />
            <Scene key='filter' title='Filter' component={Filter} hideNavBar type={ActionConst.PUSH} />
            <Scene key='workOrderDetail' title='WorkOrderDetail' component={WorkOrderDetail} hideNavBar type={ActionConst.PUSH} />
          </Scene>
        </Scene>
      </Scene>
  </Scene>
);
export default Scenes;
