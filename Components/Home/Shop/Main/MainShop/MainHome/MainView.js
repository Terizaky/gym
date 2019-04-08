//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Collection from './Collection';
import Costume from './Costume';
import Header from '../Header';
import TopProduct from './TopProduct';
// create a component
class MainView extends Component {
    static navigationOptions = {
        header: null
        };
    render() {
        const {types} = this.props;
        return (
            <ScrollView style={styles.container}>
                <Header />
                <Collection />
                <Costume navigation = {this.props.navigation} types = {types}/>
                <TopProduct navigation = {this.props.navigation}/>
            </ScrollView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DBDBD8',
    },
});

//make this component available to the app
export default MainView;
