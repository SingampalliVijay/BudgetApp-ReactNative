import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Categories from '../components/Categories';
import SubCategory from '../screens/SubCategory';
import SubCategoryItemList from '../screens/SubCategoryItemList';
import ItemList from '../screens/ItemList';

const Stack = createStackNavigator();
const CategoryStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Category' component={Categories} options={{ headerShown: false }} />
            <Stack.Screen name='SubCategory' component={SubCategory} />
            {/* <Stack.Screen name='SubCategoryItemList' component={SubCategoryItemList} /> */}
            <Stack.Screen name='SubCategoryItemList' component={ItemList} />
        </Stack.Navigator>
    )
}
export default CategoryStack