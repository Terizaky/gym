//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer, StackActions, NavigationActions } from 'react-navigation';
import ProductDetail from '../ProductDetail/ProductDetail';
import CartView from '../Cart/CartView';
// create a component
class Cart extends Component {
    static navigationOptions = {
        header: null
        };
    render() {
        return (
            <View style={styles.container}>
                <CartView  navigation = {this.props.navigation}></CartView>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
const AppNavigator = createStackNavigator({
   
    CartView: {
      screen: CartView,
  
    },
    ProductDetail: {
      screen: ProductDetail,                            
    }
    },
     {
        initialRouteName: 'CartView',
    });
  export default createAppContainer(AppNavigator);
