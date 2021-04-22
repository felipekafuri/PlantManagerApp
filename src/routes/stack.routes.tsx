import * as React from 'react'
import { Text, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Confirmation } from '../pages/Confirmation'
import { UserIdentification } from '../pages/UserIdentification'
import { Welcome } from '../pages/Welcome'
import { PlantsSelect } from '../pages/PlantsSelect'
import colors from '../styles/colors'

const Stack = createStackNavigator();

 function StackRoutes() {
  return (
      <Stack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle:{
            backgroundColor: colors.white
          }
        }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="UserIdentification" component={UserIdentification} />
        <Stack.Screen name="Confirmation" component={Confirmation} />
        <Stack.Screen name="PlantsSelect" component={PlantsSelect} />
      </Stack.Navigator>
  );
}

export default StackRoutes;