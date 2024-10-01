import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import HomeScreen from './src/screens/HomeScreen';
import store from './src/redux/Store';
import SubCategoryItemList from './src/styles/SubCategoryItemList';
import AddItem from './src/screens/AddItem';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen" >
          <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
          {/* <Stack.Screen name='HomeScreen' component={AddItem} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
export default App