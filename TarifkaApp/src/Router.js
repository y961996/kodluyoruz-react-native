import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import FoodCategory from './pages/FoodCategory';
import Foods from './pages/Foods';
import Detail from './pages/Detail';

// pagelerin headerlarini customize edebilirim.

const Router = () => {
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="FoodCategoryScreen" component={FoodCategory} />
      <Stack.Screen name="FoodsScreen" component={Foods} />
      <Stack.Screen name="DetailScreen" component={Detail} />
    </Stack.Navigator>
  </NavigationContainer>;
};

export default Router;