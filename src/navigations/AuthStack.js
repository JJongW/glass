import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Signup,onboardstart} from '../screens';

const Stack = createStackNavigator();

const AuthStack= () =>{
    const theme = useContext(ThemeContext);
    return(
        <Stack.Navigator
        screenOptions={{
            headerTitleAlign: 'center',
            cardStyle: {backgroundColor: theme.backgroundColor},
            headerTintColor: theme.headerTintColor,
        }}
        >
            <Stack.Screen 
            name="Login" 
            component={Login}
            options={{headerShown: false}}/>
            <Stack.Screen name="Signup" component={Signup}/>
        </Stack.Navigator>
    );
};

export default AuthStack;