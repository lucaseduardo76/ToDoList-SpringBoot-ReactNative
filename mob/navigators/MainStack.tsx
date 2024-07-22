import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../components/login';
import { Home } from '../components/home';

const MainStack = createStackNavigator();

export default () => {
    return(
        <MainStack.Navigator initialRouteName="Login">
            <MainStack.Screen name='Login' component={Login}/>
            <MainStack.Screen name='Home' component={Home}/>
        </MainStack.Navigator>
    )
}