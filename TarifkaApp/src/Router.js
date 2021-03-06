import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import FoodCategory from './pages/FoodCategory';
import Foods from './pages/Foods';
import Detail from './pages/Detail';

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="FoodCategoryScreen"
          component={FoodCategory}
          options={{
            title: 'Categories',
            headerTitleStyle: {color: '#fea500'},
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="FoodsScreen"
          component={Foods}
          options={{
            title: 'Meals',
            headerTitleStyle: {color: '#fea500'},
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="DetailScreen"
          component={Detail}
          options={{
            title: 'Detail',
            headerTitleStyle: {color: '#fea500'},
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
