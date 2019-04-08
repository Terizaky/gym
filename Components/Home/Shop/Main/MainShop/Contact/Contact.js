import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import map from '../../../../images/map.jpg';


import Icon from 'react-native-vector-icons/Ionicons';
class Contact extends Component {
    render() {
        const {
            mapContainer, wrapper, infoContainer,
            rowInfoContainer, imageStyle, infoText
        } = styles;
        return (
            <View style={wrapper}>
                <View style={mapContainer}>
                     <Image 
                        style={{ flex: 1, alignSelf: 'stretch', width: undefined }} source={map} 
                    /> 
                </View>
                <View style={infoContainer}>
                    <View style={rowInfoContainer}>
                    
                        <Icon name='ios-compass'
                            style={{ fontSize: 26, color: 'green' }}/> 
                   
                        <Text style={infoText}>30/04 - Hung Loi - Ninh Kieu - Can Tho</Text>
                    </View>
                    <View style={rowInfoContainer}>
                    <Icon name='ios-call'
                            style={{ fontSize: 26, color: 'green' }}/> 
                        <Text style={infoText}>(+84) 0944129603</Text>
                    </View>
                    <View style={rowInfoContainer}>
                    <Icon name='ios-mail'
                            style={{ fontSize: 26, color: 'green' }}/> 
                        <Text style={infoText}>gymforlifeapp@gmail.com</Text>
                    </View>
                    <View style={[rowInfoContainer, { borderBottomWidth: 0 }]}>
                    <Icon name='logo-facebook'
                            style={{ fontSize: 26, color: 'green' }}/> 
                        <Text style={infoText}>https://www.facebook.com/wiind98</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    wrapper: { flex: 1, backgroundColor: '#F6F6F6' },
    mapStyle: {
        width: width - 40,
        height: 230,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    mapContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#FFFFFF',
        margin: 10,
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    infoContainer: {
        padding: 10,
        flex: 1,
        backgroundColor: '#FFF',
        margin: 10,
        marginTop: 0,
        borderRadius: 2,
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    rowInfoContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#D6D6D6'
    },
    imageStyle: {
        width: 30,
        height: 30
    },
    infoText: {
        fontFamily: 'Avenir',
        color: '#AE005E',
        fontWeight: '500'
    }
});

export default Contact;