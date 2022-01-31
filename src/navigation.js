import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChatShell from './chat/shell/Chat-Shell';
import Login from './chat/shell/Login';
import { View, Text , StyleSheet, TextInput, Image,useWindowDimensions } from 'react-native';

const AppStack = createStackNavigator();
export default function Navigator(){

    return (
    <NavigationContainer>
    <AppStack.Navigator  >
    <AppStack.Screen name="Login"  component={Login} options={{ gestureEnabled: false,
            headerShown: false,
            headerLeft: () => <></>, }}   />
    <AppStack.Screen name="ChatShell" component={ChatShell} options={{ gestureEnabled: false,
            headerShown: false,
            headerLeft: () => <></>, }}  />

    </AppStack.Navigator>

    </NavigationContainer>
    );
}