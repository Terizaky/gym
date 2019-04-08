//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import banner1 from '../../../../images/bannerCostume1.jpg';
import banner2 from '../../../../images/bannerCostume2.jpg';
import banner3 from '../../../../images/bannerCostume3.jpg';

const { width, height } = Dimensions.get('window');
const imageWidth = width - 40;
const imageHeight = imageWidth / 1.5;
// create a component
export default class Costume extends Component {
    
    render() {
        const {types} = this.props;
        const { container, textStyle, imageStyle, swiperStyle } = styles;
        return (
            <View style={container}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={textStyle}>Gymer Customes And Accessories</Text>
                </View>
                <View style={{ flex: 4 }}>
                    <Swiper showsPagination autoplay={true} autoplayTimeOut={2.5} width={width - 40}>
                        {
                            types.map ( e => (
                                <TouchableOpacity onPress = {()=> {this.props.navigation.push('ListProduct')}}>
                            <Image source={banner1} style={imageStyle} />
                            </TouchableOpacity>
                            ))
                        }
                        

                    </Swiper>
                </View>
            </View>
        );
    }
}
//1080 x 648

// define your styles
const styles = StyleSheet.create({
    container: {
        height: height * 0.4,
        backgroundColor: '#fff',
        margin: 10,
        justifyContent: 'space-between',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
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

