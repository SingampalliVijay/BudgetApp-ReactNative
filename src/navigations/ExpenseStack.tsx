import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import AddItem from '../screens/AddItem';
import Expenses from '../components/Expenses';
import ExpenseDetails from '../screens/ExpenseDetails';

const Stack = createStackNavigator();
const ExpenseStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Expense' component={Expenses} options={{ headerShown: false }} />
            <Stack.Screen name='AddItem' component={AddItem} />
            <Stack.Screen name='ExpenseDetails' component={ExpenseDetails} />
        </Stack.Navigator>
    )
}
export default ExpenseStack