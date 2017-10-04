import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert, TouchableOpacity, Image, NativeModules } from 'react-native';
import { AppSizes } from '@theme';
import { Icon } from 'react-native-elements';
import { pick, capture } from '../../../services/pick';

const widthScreen = AppSizes.screen.width;

class PhotoSession extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagesSource: [],
    }
  }

  takePhoto() {
    capture((source) => {
      this.setState({imagesSource: [...this.state.imagesSource, source]})
    });
  }

  addFromGallery() {
    pick((source) => {
      this.setState({imagesSource: [...this.state.imagesSource, ...source]})
    });
  }

  render() {
    let img = this.state.imagesSource == null? null:
        this.state.imagesSource.map( (image) => (
          <Image
            source={{uri: image.path}}
            style={[styles.image]}
          />
        ))

    return(
      <View style={[styles.container]}>
        <View style={{ borderBottomWidth: 8, borderBottomColor: '#d2d2d2' }} />
        <View style={{paddingLeft: 15}}>
          <Text style={[styles.title]} >Add Photos</Text>
          <Text style={[styles.description]}>Take photos of the job before completing the work</Text>
        </View>
        <View style={[styles.containerButton]}>
          <View style={[styles.viewButton]}>
            <TouchableOpacity onPress={this.takePhoto.bind(this)}>
              <Icon name={'md-camera'} color='#FF9200' type='ionicon' size={50}/>
              <Text style={[styles.content]}>TAKE PHOTO</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.viewButton]}>
            <TouchableOpacity onPress={this.addFromGallery.bind(this)}>
              <Icon name={'md-image'} color='#FF9200' type='ionicon' size={50}/>
              <Text style={[styles.content]}>ADD FROM GALLERY</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.imagesContainer]}>
          {img}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 10,
    margin: 10
  },
  viewButton: {
    backgroundColor: '#ffffff',
    width: AppSizes.screen.width/2 - 30,
    height: 120,
    margin: 10,
    paddingTop: 15,
    shadowOpacity: 0.75,
    shadowRadius: 2,
    shadowColor: 'gray',
    shadowOffset: { height: 0, width: 0 },
    alignItems:'center',
  },
  title: {
    fontSize: 20,
    color: '#505050',
    marginTop: 10,
    marginBottom: 10,
  },
  description: {
    fontSize: 17,
    color: '#919191',
  },
  containerButton: {
    flexDirection: 'row',
    marginTop: 10
  },
  content: {
    color: '#FF9200',
    fontSize: 14,
    fontWeight: 'bold'
  },
  image: {
    height: widthScreen/2 - 30,
    width: widthScreen/2 - 30,
    margin: 10,
    shadowRadius: 5,
  },
  imagesContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  }
});

export default PhotoSession;
