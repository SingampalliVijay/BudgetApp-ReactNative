import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import HomeScreen from './src/screens/HomeScreen';
import { store, persistor } from './src/redux/Store';
import Toast from 'react-native-toast-message';
import { PersistGate } from 'redux-persist/integration/react';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="HomeScreen" >
            <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
          <Toast />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
export default App