import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Profile from '../components/Profile';
import UpdateProfile from '../screens/UpdateProfile';
import Settings from '../screens/Settings';

const Stack = createStackNavigator();
const ExpenseStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
            <Stack.Screen name='UpdateProfile' component={UpdateProfile} />
            <Stack.Screen name='Settings' component={Settings} />
        </Stack.Navigator>
    )
}
export default ExpenseStack