
import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  Animated,
  Text,
  TouchableOpacity,
  Platform
} from 'react-native'
import MainSection from '../../components/Home/MainSection'
import LoginContainer from '../Login/LoginContainer'
import WorkOrderDetail from '../WorkOrderDetail/WorkOrderDetailContainer';
import { AppColors } from '@theme';
import { Icon } from 'react-native-elements';
import Header from '../ui/Header/HeaderContainer';

const HEADER_MAX_HEIGHT = 95;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollY: new Animated.Value(0),
    }
  }

  _renderScrollViewContent() {
    const data = Array.from({ length: 30 });
    return (
      <View style={styles.scrollViewContent}>
        {data.map((_, i) =>
          <View key={i} style={styles.row}>
            <Text>{i}</Text>
          </View>
        )}
      </View>
    );
  }

  render() {
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp',
    });

    const titleHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [-10, 5],
      extrapolate: 'clamp',
    });

    const isIosDevice = Platform.OS === 'ios' ? true : false;

    return (
      <View style={{flex: 1}}>
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

        <Header headerText="Home" />

        <ScrollView
            onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
            )}>
             <MainSection headerHeight={headerHeight} sectionList={this.props.sectionList}/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    height: 40,
    margin: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollViewContent: {
    marginTop: HEADER_MAX_HEIGHT,
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
  }
});
