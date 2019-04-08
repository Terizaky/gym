//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Main from './MainHome/Main';
import Contact from './Contact/Contact';
import Search from './Search/Search';
import Cart from './Cart/Cart'
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';
import withBadge from './withBadge';
// create a component
class Shop extends Component {
  constructor(props){
      super(props);
      this.state = {
          types: []
      }
      
  }
    componentDidMount() {
        fetch('https://gfl-app.000webhostapp.com/')
        .then(res => res.json())
        .then(resJSON => console.log(resJSON));
    }
    render() {
        const {types} = this.state;
        return (
            <View style={styles.container}>
              
                <createMaterialBottomTabNavigator types = {types} />
            </View>
        );
    }
}
const BadgedIcon = withBadge(1 , { status: "success", left: 25 })(Icon);
export default createMaterialBottomTabNavigator({
    
    Home: {
        screen: Main,
        navigationOptions: {
            
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-home" color={tintColor} size={24} />
            
            ),
            
        }
    },
    Cart: {
        screen: Cart,
        navigationOptions:  {
            tabBarLabel: 'Cart',
            tabBarIcon: ({ tintColor }) => (
                <BadgedIcon  name="ios-cart" color={tintColor} size={24} 
                />
                

            )
        }
    },
    Search: {
        screen: Search,
        navigationOptions: {
            tabBarLabel: 'Search',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-search" color={tintColor} size={24} />
            )
        }
    },
    Contact: {
        screen: Contact,
        navigationOptions: {
            tabBarLabel: 'Contact',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-contact" color={tintColor} size={24} />
            )
        }
    },
}, {
        initialRouteName: 'Home',
        order: ['Home', 'Cart', 'Search', 'Contact'],

        activeTintColor: 'green',
        barStyle: {
            backgroundColor: 'white',
            borderTopColor: 'grey',
            borderTopWidth: 0.5
        }
    }
)
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

});

