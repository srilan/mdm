import React from 'react';
import { View, Text, Button } from 'react-native';
import {login} from '../api/auth/login';

const LoginScreen = ({ navigation }) => {
    
    const loginUser = () => {
        login('test@test.ca', 'password')
        .then(() => {
            navigation.navigate('Home');
        })
        .catch((err) => console.log('error:', err.message));
    };
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>LoginScreen</Text>
        <Button
            title="Log in"
            onPress={loginUser}
        />
        <Button
            title="Create account"
            onPress={() => navigation.navigate('CreateAccount')}
        />
        </View>
    );
};

export default LoginScreen;