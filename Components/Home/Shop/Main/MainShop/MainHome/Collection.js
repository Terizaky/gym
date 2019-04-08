//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import bannerProtein from '../../../../images/bannerProtein.png';

const {width, height}  =Dimensions.get('window');
// create a component
export default class Collection extends Component {
    
    render() {
        const {container, textStyle, imageStyle} =styles;
        return (
            <View style={container}>
                <View style = {{flex: 1, justifyContent: 'center'}}>
                <Text style={textStyle}>Protein Collection</Text>
                </View>
                <TouchableOpacity style = {{flex: 4, justifyContent: 'flex-end'} }>
                <Image source= {bannerProtein} style = {imageStyle} />
                </TouchableOpacity>
            </View>
        );
    }
}
//1080 x 648
const imageWidth = width - 40;
const imageHeight = (imageWidth / 1000) * 648;
// define your styles
const styles = StyleSheet.create({
    container: {
        height: height * 0.4,
        backgroundColor: '#fff',
        margin: 10,
        justifyContent: 'space-between',
        shadowColor: '#2E272B',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0
    },
    textStyle: {
        fontSize: 20,
        color: '#AFAEAF'
    },
    imageStyle: {
        height: imageHeight,
        width: imageWidth
    }
    
});

//make this component available to the app

