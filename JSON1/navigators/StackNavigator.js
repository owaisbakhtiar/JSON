import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from './DrawerNavigator'
import SubCategoriesScreen from '../screens/SubCategoriesScreen'
import BusinessListScreen from '../screens/BusinessListScreen'
import BusinessDetailScreen from '../screens/BusinessDetailScreen'
import FavoritesEditScreen from '../screens/FavoritesEditScreen'
import InfoDetailScreen from '../screens/InfoDetailScreen'
import Colors from '../constants/Colors';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'white' },
              headerTintColor: Colors.primaryColor,
              contentStyle: { backgroundColor: 'white' },
              headerTitleStyle: { fontSize: 20, color: Colors.primaryColor },

    }}>
      <Stack.Screen name="DrawerNavigator" component={DrawerNavigator}
              options={{ headerShown: false }}/>
        <Stack.Screen name="SubCategoriesScreen" component={SubCategoriesScreen} />
        <Stack.Screen name="BusinessListScreen" component={BusinessListScreen} />
        <Stack.Screen name="BusinessDetailScreen" component={BusinessDetailScreen} />
      <Stack.Screen name="FavoritesEditScreen" component={FavoritesEditScreen}
        options={{ title: 'Edit favorite' }}/>
        <Stack.Screen name="InfoDetailScreen" component={InfoDetailScreen} />
      </Stack.Navigator>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})