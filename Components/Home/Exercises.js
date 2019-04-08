//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header, Left, Right, Icon } from 'native-base'
// create a component
class Exercises extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Header>
                    <Left style={styles.icon} >
                        <Icon name="menu"
                            onPress={() => this.props.navigation.openDrawer()} />
                    </Left>
                </Header>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    icon: {
        flex: 1,
        alignItems: 'flex-start'
    }
});

//make this component available to the app
export default Exercises;
