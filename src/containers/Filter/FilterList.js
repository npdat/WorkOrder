import React, { Component } from 'react';
import { ListView, Text, View } from 'react-native';
import FilterOption from './Cell/FilterOption';
import FilterHeader from './Header/FilterHeader';

const options = [
  {name: 'In Brisban city area', category: 'Where'},
  {name: 'In North Brisbane area', category: 'Where'},
  {name: 'In South Brisbane area', category: 'Where'},
  {name: 'In East Brisbane area', category: 'Where'},
  {name: 'In West Brisbane area', category: 'Where'},
  {name: 'Lawn moving', category: 'What'},
  {name: 'Gardening', category: 'What'},
  {name: 'Road maitenance', category: 'What'},
  {name: 'Footpath maitenance', category: 'What'},
];


class FilterList extends Component {

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
      />
    )
  }

  renderRow(item) {
    return (
      <FilterOption data={item}/>
    )
  }

  renderSectionHeader(sectionData, category) {
    return (
      <FilterHeader data={category}/>
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

export default FilterList;
