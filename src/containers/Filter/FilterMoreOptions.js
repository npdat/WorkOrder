import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert
} from 'react-native';
import {AppColors} from '@theme';
import {Icon} from 'react-native-elements';
import ListFilterMoreOptions from './ListFilterMoreOptions';



class FilterMoreOptions extends Component {

  componentWillUpdate() {


  }

  constructor(props) {

    super(props);

    this.state = {isExpanded: true}
  }

  render() {



    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.setState({isExpanded: !this.state.isExpanded})}
          >
          <View style={{
            flex: 1.0,
            flexDirection: 'row'
          }}>
            <Text style={styles.titleCheckbox}> MORE OPTIONS </Text>

            <Icon
              name={ this.state.isExpanded ? 'angle-down' : 'angle-up'}
              type='font-awesome'
              color= {AppColors.orange}
              size={15}
              style={{marginLeft : 10, marginTop : 10}}
            />
          </View>
        </TouchableOpacity>

        { this.state.isExpanded &&
          <ListFilterMoreOptions/>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1.0,
    marginTop: 20,
    flexDirection: 'column'
  },


  titleCheckbox: {
    fontSize: 16,
    color: AppColors.orange,
    padding:10
  },

  expandedArea: {

    height: 200,
    backgroundColor: AppColors.listItemBackground
  }
})

export default FilterMoreOptions;
