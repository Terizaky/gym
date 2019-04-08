import React, { Component } from 'react';
import {
  AppRegistry, View, Text, Button, Image, StyleSheet,
} from 'react-native';

import { createStackNavigator, createAppContainer, StackActions, NavigationActions } from 'react-navigation';

export default class App extends Component {
  static navigationOptions = {
    header: null
  };
 
  render() {
    return (

      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.imageBackground}
            source={require('./image/gymForLife.jpg')}>
          </Image>
          <Text style={styles.title}>Gym For Life </Text>
        </View>
      </View>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff'
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageBackground: {
    resizeMode: 'cover'
  },
  title: {
    color: 'black',
    textAlign: 'center',
    fontSize: 21,
    marginTop: 5,
    opacity: 0.9
  }

})

