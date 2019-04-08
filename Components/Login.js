import React, { Component } from 'react';
import {
    View, Text, TextInput, Image, StyleSheet,
    SafeAreaView, TouchableOpacity, Alert, Keyboard,
    KeyboardAvoidingView, TouchableWithoutFeedback
} from 'react-native';
import Register from '../Components/Register';
import Home from '../Components/Home';
import { createStackNavigator, createAppContainer, StackActions, NavigationActions } from 'react-navigation';
import { firebaseApp } from './FirebaseConfig';

class Login extends React.Component {
    static navigationOptions = {
        header: null
        };
    constructor(props) {
        super(props);
        this.state = {
            UserEmail: '',
            UserPassword: ''
        };

    }
   
    UserLoginFunction = () =>{
 
        const { UserEmail }  = this.state ;
        const { UserPassword }  = this.state ;
        
        
       fetch('https://gfl-app.000webhostapp.com/RegisterAndLogin/User_Login.php/', {
         method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({
        
           email: UserEmail,
        
           password: UserPassword
        
         })
        
       }).then((response) => response.json())
             .then((responseJson) => {
        
               // If server response message same as Data Matched
              if(responseJson === 'Data Matched')
               {
        
                   //Then open Profile activity and send user email to profile activity.
                   this.props.navigation.push('Home')
        
               }
               else{
        
                 Alert.alert(responseJson);
               }
        
             }).catch((error) => {
               console.error(error);
             });
        
         }

    render() {
       
        return (
            <SafeAreaView style={styles.loginContainer}>
                <KeyboardAvoidingView behavior='padding' style={styles.loginContainer}>
                    <TouchableWithoutFeedback style={styles.loginContainer}
                    onPress={Keyboard.dismiss}>
                        <View style={styles.loginContainer}>
                            <View style={styles.logoContainer}>
                                <Image style={styles.imageBackground}
                                    source={require('../image/gfl.png')}>
                                </Image>
                            </View>
                            <View style={styles.infoContainer}>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={UserEmail => this.setState({UserEmail})}
                                    keyboardType='email-address'
                                    placeholder='Enter your email'
                                    autoCapitalize="none"
                                    placeholderTextColor='rgba(255,255,255,0.8)'
                                    returnKeyType='next'
                                    onSubmitEditing={() => this.refs.txtPassword.focus()}
                                    value={this.state.email}

                                />
                                <TextInput
                                    style={styles.input}
                                    onChangeText={UserPassword => this.setState({UserPassword})}
                                    keyboardType='default'
                                    returnKeyType='go'
                                    placeholder='Enter your password'
                                    autoCapitalize="none"
                                    placeholderTextColor='rgba(255,255,255,0.8)'
                                    secureTextEntry={true}
                                    value={this.state.password}
                                    ref={"txtPassword"}
                                />
                                <TouchableOpacity style={styles.buttonContainer}
                                    onPress={() => { this.UserLoginFunction()}}>
                                    <Text style={styles.buttonText}>SIGN IN</Text>
                                </TouchableOpacity>
                                
                                <View style={styles.signUpContainer}>
                                    <Text style={styles.signQuestion}>You don't have an account to login?</Text>
                                    <TouchableOpacity
                                        onPress = {()=> {this.props.navigation.push('Register')}}
                                    >
                                        <Text style={styles.signUpText}>SIGN UP</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>


                        </View>
                    </TouchableWithoutFeedback>


                </KeyboardAvoidingView>
            </SafeAreaView>



        );
    }
}
const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black'
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageBackground: {
        resizeMode: 'cover'
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
    signUpContainer: {
        flexDirection: 'row'
    },
    signQuestion: {
        color: 'white',
        fontSize: 15,
        marginLeft: 20,
        marginRight: 15,

    },
    signUpText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#009900',
        fontSize: 15,
        color: '#009900',

    }

})
const AppNavigator = createStackNavigator({
   
    Login: {
      screen: Login,    
    },
    Register: {
      screen: Register,                
    },
    Home: {
      screen: Home, 
      navigationOptions: {
          header: null,
      }               
    },
    },
     {
        initialRouteName: 'Login',
    });
export default createAppContainer(AppNavigator);
  



