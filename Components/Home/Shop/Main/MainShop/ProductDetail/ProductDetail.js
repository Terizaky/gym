//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
class ProductDetail extends Component {
    static navigationOptions = {
        header: null
        };
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.container} onPress={() => this.props.navigation.goBack()}>
                    <Text>Back</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default ProductDetail;
