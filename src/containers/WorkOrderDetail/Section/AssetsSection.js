import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { AppSize, AppColors } from '@theme/';

export default class Assets extends Component {
    render = () => {
        return (
            <View style={{ flex: 1, flexDirection: 'column', marginTop: 10 }}>
                <Text style={{ paddingLeft: 10, fontSize: 20 }}>Assets(2)</Text>
                <View>
                    <View style={{
                        backgroundColor: 'white', margin: 5, borderRadius: 2, shadowColor: '#000000',
                        shadowOffset: {
                            width: 0,
                            height: 2
                        },
                        shadowRadius: 2,
                        shadowOpacity: 0.2
                    }}>
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 18, color: '#8c8c8c', paddingBottom: 10 }}>New Fields part bench</Text>
                            <Text style={{ color: '#8a8a8a', fontSize: 12 }}>ID: 12345678</Text>
                            <Text style={{ color: '#8a8a8a', fontSize: 12 }} >Location: New Fields part</Text>
                        </View>
                        <Image source={require('../../../images/maps_asset.png')} style={{ height: 150 }} />

                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginBottom: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity onPress={() => { }}>
                                    <Icon
                                        name='assignment'
                                        size={25}
                                        color={AppColors.workOrderStatus.high}
                                        containerStyle={{
                                            paddingLeft: 20
                                        }}>
                                    </Icon>
                                </TouchableOpacity>
                                <Text style={{ paddingLeft: 10 }}>Inspection required</Text>
                            </View>
                            <TouchableOpacity onPress={() => { }}>
                                <Icon
                                    name='list'
                                    size={25}
                                    color={AppColors.brown}
                                    containerStyle={{
                                        paddingLeft: 20
                                    }}>
                                </Icon>
                            </TouchableOpacity>
                        </View>
                        <View style={{ borderBottomWidth: 1, borderBottomColor: '#d2d2d2' }} />

                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginBottom: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity onPress={() => { }}>
                                    <Icon
                                        name='bug-report'
                                        size={25}
                                        color={AppColors.brown}
                                        containerStyle={{
                                            paddingLeft: 20,
                                        }}>
                                    </Icon>
                                </TouchableOpacity>
                                <View style={{ flexDirection: 'column', paddingLeft: 10 }}>
                                    <Text style={{ fontSize: 18 }}>2 Defectts reported</Text>
                                    <Text style={{}}>- Back status have routed</Text>
                                    <Text style={{}}>- Arm rest has tallen off</Text>
                                </View>
                            </View>
                            <TouchableOpacity onPress={() => { }}>
                                <Icon
                                    name='list'
                                    size={25}
                                    color={AppColors.brown}
                                    containerStyle={{
                                        paddingLeft: 20
                                    }}>
                                </Icon>
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>

                <View>
                    <View style={{
                        backgroundColor: 'white', margin: 5, borderRadius: 2, shadowColor: '#000000',
                        shadowOffset: {
                            width: 0,
                            height: 2
                        },
                        shadowRadius: 2,
                        shadowOpacity: 0.2
                    }}>
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 18, color: '#8c8c8c', paddingBottom: 10 }}>New Fields part bench</Text>
                            <Text style={{ color: '#8a8a8a', fontSize: 12 }}>ID: 12345678</Text>
                            <Text style={{ color: '#8a8a8a', fontSize: 12 }} >Location: New Fields part</Text>
                        </View>
                        <Image source={require('../../../images/maps_asset.png')} style={{ height: 150 }} />

                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginBottom: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity onPress={() => { }}>
                                    <Icon
                                        name='assignment'
                                        size={25}
                                        color={AppColors.orange}
                                        containerStyle={{
                                            paddingLeft: 20
                                        }}>
                                    </Icon>
                                </TouchableOpacity>
                                <Text style={{ paddingLeft: 10 }}>Inspection required</Text>
                            </View>
                            <TouchableOpacity onPress={() => { }}>
                                <Icon
                                    name='list'
                                    size={25}
                                    color={AppColors.brown}
                                    containerStyle={{
                                        paddingLeft: 20
                                    }}>
                                </Icon>
                            </TouchableOpacity>
                        </View>
                        <View style={{ borderBottomWidth: 1, borderBottomColor: '#d2d2d2' }} />

                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginBottom: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity onPress={() => { }}>
                                    <Icon
                                        name='bug-report'
                                        size={25}
                                        color={AppColors.brown}
                                        containerStyle={{
                                            paddingLeft: 20,
                                        }}>
                                    </Icon>
                                </TouchableOpacity>
                                <View style={{ flexDirection: 'column', paddingLeft: 10 }}>
                                    <Text style={{ fontSize: 18 }}>2 Defectts reported</Text>
                                    <Text style={{}}>- Back status have routed</Text>
                                    <Text style={{}}>- Arm rest has tallen off</Text>
                                </View>
                            </View>
                            <TouchableOpacity onPress={() => { }}>
                                <Icon
                                    name='list'
                                    size={25}
                                    color={AppColors.brown}
                                    containerStyle={{
                                        paddingLeft: 20
                                    }}>
                                </Icon>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style = {{height: 8, backgroundColor: '#d2d2d2', margin: 10}} />
            </View >
        );
    }
}
