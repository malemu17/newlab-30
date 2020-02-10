import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { attemptLogin } from './store/authReducer';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './stylesheet.js';


/**
 * login function and props dispatch attemptLogin action 
 * @param {functions} props 
 * input form to input email and password , button to submit 
 * update the store and dispatch action attemptLogin 
 */

function Login(props) {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    const login = () => {
        props.dispatch(attemptLogin(email, password));
    };

    // TODO: DELETE WHEN NOT DEVELOPING
    useEffect(() => {
        props.dispatch(attemptLogin('sarah@sarah.com', 'sarahpassword'));
    }, []);

    return (
        <View>
            <Text style={styles.header}>Login</Text>

            <Text style={styles.bodyText}>Email:</Text>
            <TextInput
                autoCapitalize='none'
                autoCompleteType='email'
                keyboardType='email-address'
                textContentType='emailAddress'
                autoCorrect={false}
                style={styles.input}
                value={email}
                onChangeText={setEmail}
            />

            <Text style={styles.bodyText}>Password:</Text>
            <TextInput
                autoCorrect={false}
                textContentType='password'
                keyboardType='password'
                autoCapitalize='none'
                style={styles.input}
                value={password}
                onChangeText={setPassword}
            />

            <Button title='Submit' onPress={login} />
        </View>
    );
}

export default connect()(Login);
