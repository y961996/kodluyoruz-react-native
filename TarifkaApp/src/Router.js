import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const Router = () => {
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="null" component={null} />
    </Stack.Navigator>
  </NavigationContainer>;
};

export default Router;
