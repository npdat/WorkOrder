import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon, SocialIcon, Avatar } from 'react-native-elements';
import { AppSize, AppColors } from '@theme/';

export default class NoteSection extends Component {
    render = () => {
        return (
            <View style={{ flex: 1, flexDirection: 'column', marginTop: 10 }}>
                <Text style={{ paddingLeft: 10, fontSize: 20 }}>Note(3)</Text>
                <TouchableOpacity>
                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 10, padding: 10 }}>
                        <Avatar
                            small
                            rounded
                            source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg" }}
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.7}
                        />

                        <View style={{ flexDirection: 'column', paddingLeft: 5 }}>
                            <Text>Erik Rules wrote on  12 jun 2017:</Text>
                            <Text style={{ color: '#7c7c7c', fontSize: 18, flexWrap: 'wrap' }}>The park benchs locks in petty bade shape</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={{ borderBottomWidth: 1, borderBottomColor: '#d2d2d2' }} />

                <TouchableOpacity>
                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 10, padding: 10 }}>
                        <Avatar
                            small
                            rounded
                            source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg" }}
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.7}
                        />

                        <View style={{ flexDirection: 'column', paddingLeft: 5 }}>
                            <Text style={{ flexWrap: 'wrap' }}>Erik Rules wrote on  12 jun 2017:</Text>
                            <Text style={{ color: '#7c7c7c', fontSize: 18, flex: 1, flexWrap: 'wrap' }}>The park benchs locks in petty bade shape</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <View style={{ borderBottomWidth: 1, borderBottomColor: '#d2d2d2' }} />

                <TouchableOpacity>
                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 10, padding: 10 }}>
                        <Avatar
                            small
                            rounded
                            source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg" }}
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.7}
                        />

                        <View style={{ flexDirection: 'column', paddingLeft: 5 }}>
                            <Text style={{ flexWrap: 'wrap' }}>Erik Rules wrote on  12 jun 2017:</Text>
                            <Text style={{ color: '#7c7c7c', fontSize: 18, flex: 1, flexWrap: 'wrap' }}>The park benchs locks in petty bade shape</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}