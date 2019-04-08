//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const { height } = Dimensions.get('window');
// create a component
class Header extends Component {
    render() {
        return (
                <TextInput style={styles.search} 
                placeholder='What do you want to buy?   '
                placeholderTextColor='#AFAEAF'
                underlineColorAndroid= "transparent" />
    


        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        height: height / 8,
        backgroundColor: 'grey',
    },
    search: {
        height: height / 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        margin: 10,
        paddingHorizontal: 15,
    }
});

//make this component available to the app
export default Header;
