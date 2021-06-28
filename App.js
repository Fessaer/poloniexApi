import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './src/Pages/Home';
import TablePanel from './src/Pages/Table'
import Store from './src/Components/Store';
import { children } from 'min-document';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Store>
      <NavigationContainer>
        <Drawer.Navigator>
            {/* {children} */}
            <Drawer.Screen name="О приложении" component={Home} />
            <Drawer.Screen name="Котировки" component={TablePanel} />
          
        </Drawer.Navigator>
      </NavigationContainer>
      </Store>
    
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
