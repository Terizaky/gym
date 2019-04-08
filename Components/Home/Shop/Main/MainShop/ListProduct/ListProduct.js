//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import cos1 from '../../../../images/Costume/cos1.jpg'
import backlist from '../../../../images/backlist.png'
// create a component
class ListProduct extends Component {
    static navigationOptions = {
        header: null
    };
    render() {
        const { container, header, wrapper, backStyle,
             titleStyle, productContainer, productInfo,
              productImage, lastRowInfo, txtName, txtPrice, txtColor, txtLoai, txtDetail } = styles;
        return (

            <View style={container}>
                <ScrollView style={wrapper}>
                    <View style={header}>
                       <TouchableOpacity onPress = {()=> {this.props.navigation.goBack()}}>
                       <Image source={backlist} style={backStyle} />
                       </TouchableOpacity>
                        <Text style={titleStyle}>Costume</Text>
                        <View style={{ width: 30 }}/>
                    </View>
                        <View style={productContainer}>
                            <Image style={productImage} source={cos1} />
                            <View style={productInfo}>
                                <Text style = {txtName}>Sport Legging</Text>
                                <Text  style = {txtPrice}> 22$</Text>
                                <Text  style = {txtLoai}>Costume</Text>
                                <View style={lastRowInfo}>
                                    <Text  style = {txtColor}>Color Black</Text>
                                    <View style ={{backgroundColor: 'black', height: 16, width: 16, borderRadius: 8}} />
                                        <TouchableOpacity>
                                            <Text  style = {txtDetail}>Show Detail</Text>
                                        </TouchableOpacity>
                                    
                                </View>
                            </View>
                        </View>
                        <View style={productContainer}>
                            <Image style={productImage} source={cos1} />
                            <View style={productInfo}>
                                <Text style = {txtName}>Sport Legging</Text>
                                <Text  style = {txtPrice}> 22$</Text>
                                <Text  style = {txtLoai}>Costume</Text>
                                <View style={lastRowInfo}>
                                    <Text  style = {txtColor}>Color Black</Text>
                                    <View style ={{backgroundColor: 'black', height: 16, width: 16, borderRadius: 8}} />
                                        <TouchableOpacity>
                                            <Text  style = {txtDetail}>Show Detail</Text>
                                        </TouchableOpacity>
                                    
                                </View>
                            </View>
                        </View>
                        <View style={productContainer}>
                            <Image style={productImage} source={cos1} />
                            <View style={productInfo}>
                                <Text style = {txtName}>Sport Legging</Text>
                                <Text  style = {txtPrice}> 22$</Text>
                                <Text  style = {txtLoai}>Costume</Text>
                                <View style={lastRowInfo}>
                                    <Text  style = {txtColor}>Color Black</Text>
                                    <View style ={{backgroundColor: 'black', height: 16, width: 16, borderRadius: 8}} />
                                        <TouchableOpacity>
                                            <Text  style = {txtDetail}>Show Detail</Text>
                                        </TouchableOpacity>
                                    
                                </View>
                            </View>
                        </View>
                        <View style={productContainer}>
                            <Image style={productImage} source={cos1} />
                            <View style={productInfo}>
                                <Text style = {txtName}>Sport Legging</Text>
                                <Text  style = {txtPrice}> 22$</Text>
                                <Text  style = {txtLoai}>Costume</Text>
                                <View style={lastRowInfo}>
                                    <Text  style = {txtColor}>Color Black</Text>
                                    <View style ={{backgroundColor: 'black', height: 16, width: 16, borderRadius: 8}} />
                                        <TouchableOpacity>
                                            <Text  style = {txtDetail}>Show Detail</Text>
                                        </TouchableOpacity>
                                    
                                </View>
                            </View>
                        </View>
                        <View style={productContainer}>
                            <Image style={productImage} source={cos1} />
                            <View style={productInfo}>
                                <Text style = {txtName}>Sport Legging</Text>
                                <Text  style = {txtPrice}> 22$</Text>
                                <Text  style = {txtLoai}>Costume</Text>
                                <View style={lastRowInfo}>
                                    <Text  style = {txtColor}>Color Black</Text>
                                    <View style ={{backgroundColor: 'black', height: 16, width: 16, borderRadius: 8}} />
                                        <TouchableOpacity>
                                            <Text  style = {txtDetail}>Show Detail</Text>
                                        </TouchableOpacity>
                                    
                                </View>
                            </View>
                        </View>
                        <View style={productContainer}>
                            <Image style={productImage} source={cos1} />
                            <View style={productInfo}>
                                <Text style = {txtName}>Sport Legging</Text>
                                <Text  style = {txtPrice}> 22$</Text>
                                <Text  style = {txtLoai}>Costume</Text>
                                <View style={lastRowInfo}>
                                    <Text  style = {txtColor}>Color Black</Text>
                                    <View style ={{backgroundColor: 'black', height: 16, width: 16, borderRadius: 8}} />
                                        <TouchableOpacity>
                                            <Text  style = {txtDetail}>Show Detail</Text>
                                        </TouchableOpacity>
                                    
                                </View>
                            </View>
                        </View>
                        <View style={productContainer}>
                            <Image style={productImage} source={cos1} />
                            <View style={productInfo}>
                                <Text style = {txtName}>Sport Legging</Text>
                                <Text  style = {txtPrice}> 22$</Text>
                                <Text  style = {txtLoai}>Costume</Text>
                                <View style={lastRowInfo}>
                                    <Text  style = {txtColor}>Color Black</Text>
                                    <View style ={{backgroundColor: 'black', height: 16, width: 16, borderRadius: 8}} />
                                        <TouchableOpacity>
                                            <Text  style = {txtDetail}>Show Detail</Text>
                                        </TouchableOpacity>
                                    
                                </View>
                            </View>
                        </View>
                </ScrollView>
            </View>

        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DBDBD8',
        padding: 10
    },
    wrapper: {
        backgroundColor: '#fff',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        paddingHorizontal: 10

    },
    header: {
        padding: 5,
        alignItems: 'center',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    backStyle: {
        width: 30,
        height: 30
    },
    titleStyle: {
        fontFamily: 'Avenir',
        color: 'green',
        fontSize: 20
    },
    productContainer: {
        flexDirection: 'row',
        paddingVertical: 17,
        borderTopColor: '#f0f0f0',
        borderTopWidth: 1,
        
    },
    productImage: {
        width: 90,
        height: (90 * 260) /260
    },
    productInfo: {
        justifyContent: 'space-between',
        marginLeft: 15,
        flex: 1
    },
    lastRowInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
        
    },
    txtColor: {
        fontFamily: 'Avenir'
    },
    txtDetail: {
        fontFamily: 'Avenir',
        color: 'green',
        fontSize: 15    },
    txtLoai: {
        fontFamily: 'Avenir'
    },
    txtName: {
        fontFamily: 'Avenir',
        color: '#bcbcbc',
        fontSize: 20,
        fontWeight: '400'
    },
    txtPrice: {
        fontFamily: 'Avenir',
        color: 'green',
    }

});

//make this component available to the app
export default ListProduct;
