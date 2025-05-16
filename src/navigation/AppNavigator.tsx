import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import { RootStackParamList } from './types';
import TasksScreen from 'components/tasks/TasksScreen';
import ListingScreen from 'components/listing/ListingScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Inicio">
      <Stack.Screen name="Inicio" component={HomeScreen} />
      <Stack.Screen name="Tareas" component={TasksScreen} />
      <Stack.Screen name="Listado" component={ListingScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
