//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer, StackActions, NavigationActions } from 'react-navigation';
import ProductDetail from '../ProductDetail/ProductDetail';
import SearchView from '../Search/SearchView';
// create a component
class Search extends Component {
    static navigationOptions = {
        header: null
        };
    render() {
        return (
            <View style={styles.container}>
                <SearchView  navigation = {this.props.navigation}></SearchView>
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
   
    SearchView: {
      screen: SearchView,
  
    },
    ProductDetail: {
      screen: ProductDetail,                            
    }
    },
     {
        initialRouteName: 'SearchView',
    });
  export default createAppContainer(AppNavigator);
