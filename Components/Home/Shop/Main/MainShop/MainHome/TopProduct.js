//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import sp1 from '../../../../images/sp1.jpg';
import sp2 from '../../../../images/sp2.jpg';
import sp3 from '../../../../images/sp3.jpg';
import sp4 from '../../../../images/sp4.jpg';
import sp5 from '../../../../images/sp5.jpg';
import sp6 from '../../../../images/sp6.jpg';
// create a component
class TopProduct
    extends Component {
    render() {
        const {
            container, title, titleContainer,
            body, productContainer, productImage,
            productName, productPrice } = styles;
        return (
            <View style={container}>
                <View style={titleContainer}>
                    <Text style={title}>Top Product</Text>
                </View>
                <View style={body}>
                    <TouchableOpacity style={productContainer} onPress = {()=> {this.props.navigation.push('ProductDetail')}}>
                        <Image source={sp2} style={productImage} />
                        <Text style= {productName}>ProductName</Text>
                        <Text style= {productPrice}>1000$</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={productContainer}  onPress = {()=> {this.props.navigation.push('ProductDetail')}}>
                        <Image source={sp2} style={productImage} />
                        <Text style= {productName}>ProductName</Text>
                        <Text style= {productPrice}>300$</Text>
                    </TouchableOpacity>
                    <View style ={{height: 10 ,width}} />
                    <TouchableOpacity style={productContainer} onPress = {()=> {this.props.navigation.push('ProductDetail')}}>
                        <Image source={sp2} style={productImage} />
                        <Text style= {productName}>ProductName</Text>
                        <Text style= {productPrice}>1000$</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={productContainer} onPress = {()=> {this.props.navigation.push('ProductDetail')}}>
                        <Image source={sp2} style={productImage} />
                        <Text style= {productName}>ProductName</Text>
                        <Text style= {productPrice}>300$</Text>
                    </TouchableOpacity>
                    <View style ={{height: 10 ,width}} />
                    <TouchableOpacity style={productContainer} onPress = {()=> {this.props.navigation.push('ProductDetail')}}>
                        <Image source={sp2} style={productImage} />
                        <Text style= {productName}>ProductName</Text>
                        <Text style= {productPrice}>1000$</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={productContainer} onPress = {()=> {this.props.navigation.push('ProductDetail')}}>
                        <Image source={sp2} style={productImage} />
                        <Text style= {productName}>ProductName</Text>
                        <Text style= {productPrice}>300$</Text>
                    </TouchableOpacity  >
                   
                </View>
            </View>
        );
    }
}
const { width } = Dimensions.get('window');
const productWidth = (width - 60) / 2;
const productImageHight = (productWidth / 1060) * 1500

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,

    },
    title: {
        color: '#AFAEAF',
        fontSize: 20
    },
    titleContainer: {
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10,
        padding: 10,
        paddingTop: 0
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        paddingBottom : 10
    },
    productContainer: {
        width: productWidth,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,

    },
    productImage: {
        width: productWidth,
        height: productImageHight
    },
    productName: {
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#AFAEAF',
        fontWeight: '500',
        marginVertical: 5
    },
    productPrice: {
        paddingLeft: 10,
        fontFamily: 'Avenir',
        marginBottom: 5
        
    }
});

//make this component available to the app
export default TopProduct
    ;
