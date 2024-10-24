import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import CategoryStack from '../navigations/CategoryStack';
import ExpenseStack from '../navigations/ExpenseStack';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Stats from '../components/Stats';
import ProfileStack from '../navigations/ProfileStack';
import SimpleLineICons from 'react-native-vector-icons/SimpleLineIcons'
import AmountRange from '../components/AmountRange';
const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  return (
    <Tab.Navigator initialRouteName="Categories" screenOptions={{
      tabBarActiveTintColor: '#e91e63', headerShown: false
    }}>
      <Tab.Screen name="Categories" component={CategoryStack} options={{
        tabBarLabel: 'Categories',
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="book" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Stats" component={AmountRange} options={{
        tabBarLabel: 'Stats',
        tabBarIcon: ({ color, size }) => (
          <Icon name="bar-chart-outline" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Expenses" component={ExpenseStack} options={{
        tabBarLabel: 'Expenses',
        tabBarIcon: ({ color, size }) => (
          <SimpleLineICons name="note" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="User" component={ProfileStack} options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="user" color={color} size={size} />
        ),
      }} />
    </Tab.Navigator>
  );
}

