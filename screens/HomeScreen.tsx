import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Categories from '../components/Categories';
import SearchFilter from '../components/SearchFilter';
import Expenses from '../components/Expenses';
import Settings from '../components/Settings';
import Icon from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  return (
    <Tab.Navigator initialRouteName="Categories" screenOptions={{
      tabBarActiveTintColor: '#e91e63', headerShown: false
    }}>
      <Tab.Screen name="Categories" component={Categories} options={{
        tabBarLabel: 'Categories',
        tabBarIcon: ({ color, size }) => (
          <Icon name="apps-outline" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="SearchFilter" component={SearchFilter} options={{
        tabBarLabel: 'Search',
        tabBarIcon: ({ color, size }) => (
          <Icon name="search-outline" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Expenses" component={Expenses} options={{
        tabBarLabel: 'Expenses',
        tabBarIcon: ({ color, size }) => (
          <Icon name="cart" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Settings" component={Settings} options={{
        tabBarLabel: 'Settings',
        tabBarIcon: ({ color, size }) => (
          <Icon name="settings" color={color} size={size} />
        ),
      }} />
    </Tab.Navigator>
  );
}

