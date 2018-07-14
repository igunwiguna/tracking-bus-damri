import React from 'react';
import {
    View,
    Text,    
    StyleSheet
} from 'react-native'
import * as firebase from 'firebase';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { StackNavigator } from 'react-navigation'
import { Button } from 'react-native-elements'

firebase.initializeApp({
    apiKey: "AIzaSyDqRxCkr63fpFECRPqx-54c4ZW0r9aGGKw",
    authDomain: "monitoringbus-reactnative.firebaseapp.com",
    databaseURL: "https://monitoringbus-reactnative.firebaseio.com",
    projectId: "monitoringbus-reactnative",
    storageBucket: "monitoringbus-reactnative.appspot.com",
    messagingSenderId: "822855793606"
});

export default class LoginScreen extends React.Component {
    constructor() {
        super()
        this.state = { email: '', password: '', error: '', loading: false }
    }

    onLoginPress() {
        this.setState({ error: '', loading: true })
        const {
            email,
            password
        } = this.state
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ error: '', loading: false });
                this.props.navigation.navigate('Main');
            })
            .catch(() => {
                this.setState({ error: 'Gagal Otentikasi', loading: false });
            })
    }

    onSignUpPress() {
        this.setState({ error: '', loading: true })
        const {
            email,
            password
        } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ error: '', loading: false })
                this.props.navigation.navigate('Main')
            })
            .catch(() => {
                this.setState({ error: 'Gagal Otentikasi', loading: false })
            })
    }

    renderButtonOrLoading() {
        if (this.state.loading) {
            return <Text>Loading</Text>
        }
        return <View>
            <Button
                style = {styles.button}
                icon={{name: 'cached'}}
                onPress={this.onLoginPress.bind(this)}
                title='Login'
            />
            <Button
                style = {styles.button}
                onPress={this.onSignUpPress.bind(this)}
                title='SignUp'
            />
        </View>
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Login</Text>
                <FormLabel>Email</FormLabel>
                <FormInput
                placeholder="igunwiguna@gmai.com" 
                value= { this.state.email }
                onChangeText={email => this.setState({ email })} />
                <FormLabel>Password</FormLabel>
                
                <FormInput
                secureTextEntry
                placeholder = '******'
                value = { this.state.password } 
                onChangeText={password => this.setState({ password })} />
                <Text>{this.state.error}</Text>
                {this.renderButtonOrLoading()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button : {
        color: '#333333'
    }
})