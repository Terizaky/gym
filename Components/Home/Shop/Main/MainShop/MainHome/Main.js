//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer, StackActions, NavigationActions } from 'react-navigation';
import MainView from './MainView';
import ListProduct from '../ListProduct/ListProduct';
import ProductDetail from '../ProductDetail/ProductDetail';

MainView
// create a component
class Main extends Component {
    render() {
        const {types} = this.props;
        return (
            <View style={styles.container}>
                <MainView  navigation = {this.props.navigation} types={types} />
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
   
    MainView: {
      screen: MainView,
  
    },
    ProductDetail: {
      screen: ProductDetail,                            
    },
    ListProduct: {
        screen: ListProduct,
    }
    },
     {
        initialRouteName: 'MainView',
    });
  export default createAppContainer(AppNavigator);
