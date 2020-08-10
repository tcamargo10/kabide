import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Principal from './src/pages/Principal';
import Home from './src/pages/Home';
//import Search from './src/pages/Search';
//import Cart from './src/pages/Cart';
//import Favoritos from './src/pages/Favoritos';
//import Perfil from './src/pages/Perfil';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Principal" component={Principal} />
        <Stack.Screen name="Tabs" component={TabNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const TabNav = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'black',
        style: {
          backgroundColor: 'white',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({color, size}) => (
            <Icon name="search" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Home}
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({color, size}) => (
            <Icon name="basket" color={color} size={30} />
          ),
          //tabBarBadge: 3, info de quantidade no BottomTab
        }}
      />
      <Tab.Screen
        name="Favoritos"
        component={Home}
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({color, size}) => (
            <Icon name="heart" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Home}
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({color, size}) => (
            <Icon name="person" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default App;
