import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Categories from '../components/Categories';
import SubCategory from '../screens/SubCategory';
import AddItem from '../screens/AddItem';

const Stack = createStackNavigator();
const CategoryStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Category' component={Categories} options={{ headerShown: false }} />
            <Stack.Screen name='SubCategory' component={SubCategory} />
            <Stack.Screen name='AddItem' component={AddItem} />
        </Stack.Navigator>
    )
}
export default CategoryStack