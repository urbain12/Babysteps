import React, { useState, useEffect, useMemo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
    ActivityIndicator,
    View
} from 'react-native';
import Login from '../Screens/Login';
import Home from '../Screens/Home';
import Guide from '../Screens/Guide';
import Settings from '../Screens/Settings';
import Register from '../Screens/Register';

const Stack = createStackNavigator();
const screenOptionStyle = {
    headerShown: false
}

const HomeStackNavigator = (props) => {
    // const [isLoading,setIsLoading]=useState(true);

    return (

        <Stack.Navigator screenOptions={screenOptionStyle} >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Guide" component={Guide} />
            <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>

    );
}

export default HomeStackNavigator;
