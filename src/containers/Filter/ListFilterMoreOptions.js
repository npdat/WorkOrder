import React, { Component } from 'react';
import { ListView, Text, View } from 'react-native';
import FilterOptionsStyle1 from './Cell/FilterOptionsStyle1';
import FilterOptionStyle2 from './Cell/FilterOptionStyle2';
import FilterHeaderStyle1 from './Header/FilterHeaderStyle1';
import {AppColors} from '@theme';

const options = [
  {name: 'High Priority', category: 'Priorities', priority: 'high'},
  {name: 'Medium Priority', category: 'Priorities', priority: 'medium'},
  {name: 'Low Priority', category: 'Priorities', priority: 'low'},
  {name: 'Specific maintence', category: 'Activity'},
  {name: 'Other kind of maintence', category: 'Activity'},
  {name: 'Specific maintence', category: 'Activity'},
  {name: 'Other kind of maintence', category: 'Activity'},
];


class ListFilterMoreOptions extends Component {

  constructor(props) {

    super(props);

    this.state = this._getInitialState()
  }

  render() {

    return (
      <ListView
         dataSource={this.state.dataSource}
         renderRow={this.renderRow}
         renderSectionHeader={this.renderSectionHeader}
         stickySectionHeadersEnabled = {false}
         style={{
           backgroundColor: AppColors.listItemBackground
         }}
      />
    )
  }

  renderRow(item) {

    if (item.category === 'Priorities') {

      return (
        <FilterOptionStyle2 data={item}/>
      )
    } else {

      return (
        <FilterOptionsStyle1 data={item}/>
      )
    }
  }

  renderSectionHeader(sectionData, category) {
    return (
      <FilterHeaderStyle1 data={category}/>
    )
  }

  _convertFoodArrayToMap() {
    let optionsCategoryMap = {}; // Create the blank map

    options.forEach(function(optionItem) {
      if (!optionsCategoryMap[optionItem.category]) {
        // Create an entry in the map for the category if it hasn't yet been created
        optionsCategoryMap[optionItem.category] = [];
      }

      optionsCategoryMap[optionItem.category].push(optionItem);
    });

    return optionsCategoryMap;
  }

  _getInitialState() {

    let dataSource = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
        sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    });

    return {
        dataSource: dataSource.cloneWithRowsAndSections(this._convertFoodArrayToMap())
    };
  }
}

export default ListFilterMoreOptions;
