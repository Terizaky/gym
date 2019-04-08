//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import profileIcon from '../Home/images/profileIcon.jpg'
import ChangeInfo from '../Home/Shop/ChangeInfo/ChangeInfo';
import OrderHistory from '../Home/Shop/OrderHistory/OrderHistory';
import BackLogin from '../Login';
import { createStackNavigator, createAppContainer, StackActions, NavigationActions } from 'react-navigation';
// create a component
class Profile extends Component {
    static navigationOptions = {
        header: null
        };
    render() {
        const {container, profile, buttonContainer, buttonText, buttonView, logoContainer} = styles;
        return (
            <View style={container}>
                <View style = {logoContainer}>
                <Image source ={profileIcon} style = { profile } />
                </View>
                <View style = {buttonView}>
                <TouchableOpacity style = {buttonContainer} onPress = {() => this.props.navigation.push('ChangeInfo')}>
                    <Text style= {buttonText}> Change Info</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {buttonContainer} onPress = {() => this.props.navigation.push('ChangeInfo')}>
                    <Text style= {buttonText}>Order History</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {buttonContainer} >
                    <Text style= {buttonText}>Sign Out</Text>
                </TouchableOpacity>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonView: {
        flex: 1,
        left: 0,
        right: 0,
        bottom: 0,
        height: 200,
        alignItems: 'center'
        //backgroundColor: 'red'
    },
    profile: {
        width: 200,
        height: 200
    },
    buttonContainer: {
        backgroundColor: '#DBDBD8',
        borderColor: 'green',
        borderWidth: 1.5,
        width: 250,
        paddingVertical: 15,
        borderRadius: 10,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 30

    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black'
    },
});

//make this component available to the app
const AppNavigator = createStackNavigator({
   
    ChangeInfo: {
      screen: ChangeInfo,
  
    },
    OrderHistory: {
      screen: OrderHistory,                            
    },
    Profile: {
        screen: Profile,
    },
    },
     {
        initialRouteName: 'Profile',
    });
  export default createAppContainer(AppNavigator);

