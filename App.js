import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Home from './src/Pages/Home';
import Store from './src/Components/Store';
import Quotes from './src/Pages/Quotes';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <Store>
      <NavigationContainer>
        <Tab.Navigator tabBarOptions={{
          style: {
          // height: 40,
          paddingTop: 20,
        }
        }
      }>
            <Tab.Screen name="О приложении" component={Home} />
            <Tab.Screen name="Котировки" component={Quotes} />
        </Tab.Navigator>
      </NavigationContainer>
    </Store>
    
  );
}


