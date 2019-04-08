/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import Login from './Components//Login';
import Register from './Components/Register';
import Home from './Components/Home';
import {name as appName} from './app.json';
import {StakNavigator} from 'react-navigation'
import {createStackNavigator, createAppContainer, StackActions, NavigationActions} from 'react-navigation';
import Shop from './Components/Home';

class Loading extends Component{
    constructor(props){
        super(props);
        this.state = {currentScreen: 'App'};
        console.log('Start doing some tasks for about  3 seconds')
        setTimeout(()=>{
            console.log('Done some tasks for about  3 seconds')
            this.setState({ currentScreen: 'Login'})
        },3000)
    }
    render(){
        const {currentScreen} = this.state
        let LoadingScreen = currentScreen === 'App' ? <App /> : <Login />
        return LoadingScreen
    }
}
const AppNavigator = createStackNavigator({
   
    Login: {
      screen: Login,
    
     
    },
    Register: {
      screen: Register,                
    },
    Home: {
      screen: Home,                
    },
    },
     {
        initialRouteName: 'Login',
    });

AppRegistry.registerComponent(appName, () => Loading);
