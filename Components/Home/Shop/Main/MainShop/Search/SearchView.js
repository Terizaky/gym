import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, ScrollView, View, Image, Dimensions } from 'react-native';

import sp1 from '../../../../images/Costume/cos1.jpg';
import sp4 from '../../../../images/Costume/sp4.jpg';
import Header from '../Header';

function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

class SearchView extends Component {
    static navigationOptions = {
        header: null
        };
    render() {
        const {
            product, mainRight, txtMaterial, txtColor,
            txtName, txtPrice, productImage,
            txtShowDetail, showDetailContainer, wrapper, lastRowInfo
        } = styles;
        return (
            <ScrollView style={wrapper}>
                <Header />
                <View style={product}>
                    <Image source={sp1} style={productImage} />
                    <View style={mainRight}>
                        <Text style={txtName}>{toTitleCase('black dress')}</Text>
                        <Text style={txtPrice}>100$</Text>
                        <Text style={txtMaterial}>Material Fur</Text>
                        <View style={lastRowInfo} >
                            <Text style={txtColor}>Color black</Text>
                            <View
                                style={{
                                    height: 15,
                                    width: 15,
                                    backgroundColor: 'black',
                                    borderRadius: 15,
                                    marginLeft: 10
                                }}
                            />
                        </View>
                        <TouchableOpacity style={showDetailContainer}>
                            <Text style={txtShowDetail}>SHOW DETAILS</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={product}>
                    <Image source={sp4} style={productImage} />
                    <View style={mainRight}>
                        <Text style={txtName}>{toTitleCase('black dress')}</Text>
                        <Text style={txtPrice}>100$</Text>
                        <Text style={txtMaterial}>Material Fur</Text>
                        <View style={lastRowInfo} >
                                <Text style={txtColor}>Color black</Text>
                                <View
                                    style={{
                                        height: 15,
                                        width: 15,
                                        backgroundColor: 'black',
                                        borderRadius: 15,
                                        marginLeft: 10
                                    }}
                                />
                        
                        </View>
                        <TouchableOpacity style={showDetailContainer}>
                            <Text style={txtShowDetail}>SHOW DETAILS</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
            </ScrollView>
        );
    }
}

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#F6F6F6',
        flex: 1
    },
    product: {
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    productImage: {
        width: imageWidth,
        height: imageHeight,
        flex: 1,
        resizeMode: 'center'
    },
    mainRight: {
        flex: 1,
        justifyContent: 'space-between'
    },
    productController: {
        flexDirection: 'row'
    },
    numberOfProduct: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    txtName: {
        paddingLeft: 20,
        color: '#A7A7A7',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtPrice: {
        paddingLeft: 20,
        color: 'green',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtColor: {
        paddingLeft: 20,
        color: 'black',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtMaterial: {
        paddingLeft: 20,
        color: 'black',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtShowDetail: {
        color: 'green',
        fontSize: 13,
        fontWeight: '400',
        fontFamily: 'Avenir',
        textAlign: 'right',
    },
    showDetailContainer: {
        flexDirection: 'row',
        position: 'absolute',
        alignSelf: 'flex-end',
        marginTop: 100
    },
    lastRowInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
        
    },
});

export default SearchView;