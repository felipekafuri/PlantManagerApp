import * as React from 'react'
import { Text, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Confirmation } from '../pages/Confirmation'
import { PlantSave } from '../pages/PlantSave'
import { UserIdentification } from '../pages/UserIdentification'
import { Welcome } from '../pages/Welcome'
import { MyPlants} from '../pages/MyPlants'
import colors from '../styles/colors'
import TabsRoutes from './tab.routes'

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
        <Stack.Screen name="PlantsSelect" component={TabsRoutes} />
        <Stack.Screen name="PlantSave" component={PlantSave} />
        <Stack.Screen name="MyPlants" component={TabsRoutes} />
      </Stack.Navigator>
  );
}

export default StackRoutes;