import React, { Component } from 'react';
import {
    View, Text, StyleSheet, TextInput, TouchableOpacity, Alert,
    SafeAreaView, TouchableWithoutFeedback, KeyboardAvoidingView,
    Keyboard
} from 'react-native';
import { firebaseApp } from './FirebaseConfig';
require('firebase/auth')
export default class Register extends Component {
    static navigationOptions = {
        title: 'Register',
        headerLeft: null,
        headerTitleStyle: { flex: 1, textAlign: 'center', alignSelf: 'center' },
        headerStyle: {
            backgroundColor: 'black',
        },
        headerTintColor: 'white'
    };

    constructor(props) {
        super(props);
        this.state = {
            UserName: '',
            UserEmail: '',
            UserPassword: ''
        };

    }

    UserRegistrationFunction = () =>{
        const { UserName } = this.state;
        const { UserEmail } = this.state;
        const { UserPassword } = this.state;



        fetch('https://gfl-app.000webhostapp.com/RegisterAndLogin/User_Register.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({

                name: UserName,

                email: UserEmail,

                password: UserPassword

            })

        }).then((response) => response.json())
            .then((responseJson) => {

                // Showing response message coming from server after inserting records.
                Alert.alert(responseJson);

            }).catch((error) => {
                console.error(error);
            });


    }

    render() {
        return (
            <SafeAreaView style={styles.RegisterContainer}>
                <KeyboardAvoidingView behavior='padding' style={styles.RegisterContainer}>
                    <TouchableWithoutFeedback style={styles.RegisterContainer}
                        onPress={Keyboard.dismiss}>
                        <View style={styles.RegisterContainer}>
                            <View style={styles.logoContainer}>
                                {/* <Image style={styles.imageBackground}
                                    source={require('../image/gfl.png')}>
                                </Image> */}
                            </View>
                            <View style={styles.infoContainer}>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={UserName => this.setState({UserName})}
                                    placeholder='Enter your username'
                                    autoCapitalize="none"
                                    placeholderTextColor='rgba(255,255,255,0.8)'
                                    returnKeyType='next'
                                    onSubmitEditing={() => this.refs.txtemail.focus()}
                                    
                                />
                                <TextInput
                                    style={styles.input}
                                    onChangeText={UserEmail => this.setState({UserEmail})}
                                    keyboardType='email-address'
                                    placeholder='Enter your email'
                                    autoCapitalize="none"
                                    placeholderTextColor='rgba(255,255,255,0.8)'
                                    returnKeyType='next'
                                    onSubmitEditing={() => this.refs.txtPassword.focus()}
                                    ref={"txtemail"}
                                />
                                <TextInput
                                    style={styles.input}
                                    onChangeText={UserPassword => this.setState({UserPassword})}
                                    keyboardType='default'
                                    returnKeyType='go'
                                    placeholder='Enter your password'
                                    placeholderTextColor='rgba(255,255,255,0.8)'
                                    secureTextEntry={true}
                                    ref={"txtPassword"}
                                />
                                <TouchableOpacity style={styles.buttonContainer}
                                    onPress={() => { this.UserRegistrationFunction()}}>
                                    <Text style={styles.buttonText}>SIGN UP</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>


                </KeyboardAvoidingView>
            </SafeAreaView >
        );
    }
}
const styles = StyleSheet.create({
    RegisterContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black'
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        paddingHorizontal: 10,
        color: '#FFF',
        height: 40,
        marginBottom: 20,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginLeft: 15,
        marginRight: 15
    },

    infoContainer: {
        flex: 1,
        left: 0,
        right: 0,
        bottom: 0,
        height: 200,
        //backgroundColor: 'red'
    },
    buttonContainer: {
        backgroundColor: '#009900',
        paddingVertical: 15,
        borderRadius: 10,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 30

    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black'
    },

})