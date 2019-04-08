import React, { Component } from 'react';
import {
  Platform,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
  StyleSheet
} from 'react-native';
import { createDrawerNavigator, DrawerItems, createAppContainer } from 'react-navigation';
import { Icon } from 'native-base';
import Exercises from './Home/Exercises';
import Calendar from './Home/Calendar';
import Food from './Home/Food';
import Profile from './Home/Profile';
import ChangeInfo from './Home/Shop/ChangeInfo/ChangeInfo'
import Shop from './Home/Shop/Main/MainShop/Shop';
import Login from './Login';
import OrderHistory from './Home/Shop/OrderHistory/OrderHistory';
class Home extends Component {

  render() {
    return(
      <AppDrawerNavigator />
    )

}

}

const CustomDrawerComponent = (props) => (

  <SafeAreaView style={styles.CustomDrawerContainer}>
    <View style={styles.Container}>
      <Image style={styles.logoContainer}
        source={require('../image/gymForLife_logo.jpg')}>
      </Image>

    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>

)

const AppDrawerNavigator = createDrawerNavigator({
  Exercises: {
    screen: Exercises,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Icon name='book' style={{ fontSize: 24, color: tintColor }} />
      )
    }
  },
  Food: {
    screen: Food,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Icon name='md-pizza' style={{ fontSize: 24, color: tintColor }} />
      )
    }
  },
  Calendar: {
    screen: Calendar,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Icon name='md-calendar' style={{ fontSize: 24, color: tintColor }} />
      )
    }
  },
  Shop: {
    screen: Shop,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Icon name='md-appstore' style={{ fontSize: 24, color: tintColor }} />
      ),
    }
  },
  Infomation: {
    screen: ChangeInfo,
    navigationOptions: {
      
      drawerIcon: ({ tintColor }) => (
        <Icon name='md-person' style={{ fontSize: 24, color: tintColor }} />
      )
    }
  },
  'Order History': {
    screen: OrderHistory
  }
},
 {
  contentComponent: CustomDrawerComponent,
    contentOptions: {
      activeTintColor: 'green'
    }
  })
 
const styles = StyleSheet.create({
  CustomDrawerContainer: {
    flex: 1
  },
  Container: {
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  logoContainer: {
    resizeMode: 'cover'
  }
})
export default createAppContainer(AppDrawerNavigator);