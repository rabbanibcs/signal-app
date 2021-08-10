import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';
import AddChat from './screens/AddChat';
import ChatScreen from './screens/ChatScreen';

export default function App() {

  const Stack=createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerTitle:'Chats',
        headerTitleAlign:'center',
        headerStyle: {
          backgroundColor: '#536ded',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeftContainerStyle:{
          paddingLeft:10
        }
      }}>
          <Stack.Screen   name='Login'  component={Login} ></Stack.Screen>
          <Stack.Screen  name='Register'    component={Register} ></Stack.Screen>          
          <Stack.Screen   name='Home'     component={Home} ></Stack.Screen>
          <Stack.Screen   name='Addchat'     component={AddChat}></Stack.Screen>
          <Stack.Screen   name='Chat'     component={ChatScreen}></Stack.Screen>

        </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
