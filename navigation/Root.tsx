import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './Login';
import Home from './Home';

const Nav = createNativeStackNavigator();
export default function Root() {
  return (
    <Nav.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Nav.Screen name="Login" component={Login} />
      <Nav.Screen name="Home" component={Home} />
    </Nav.Navigator>
  );
}
