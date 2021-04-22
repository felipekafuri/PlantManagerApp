import React from 'react'

import { NavigationContainer } from '@react-navigation/native'

import { Confirmation } from '../pages/Confirmation'
import { PlantSave } from '../pages/PlantSave'
import { PlantsSelect } from '../pages/PlantsSelect'
import { UserIdentification } from '../pages/UserIdentification'
import { Welcome } from '../pages/Welcome'
import { MyPlants} from '../pages/MyPlants'
import colors from '../styles/colors'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

 function TabsRoutes() {
  return (
      <Tab.Navigator
        tabBarOptions={{ 
          activeTintColor: colors.green,
          inactiveTintColor: colors.heading,
          labelPosition: 'beside-icon',
          style:{
            paddingVertical: 20,
            height:88
          }
        }}
      >

        <Tab.Screen 
          name="Nova Planta" 
          component={PlantsSelect}
          options={{ 
            tabBarIcon: (({size, color})=>(
              <MaterialIcons name="add-circle-outline" size={size} color={color}/>
            ))
          }}
        />
        <Tab.Screen 
          name="MyPlants" 
          component={MyPlants}
          options={{ 
            tabBarIcon: (({size, color})=>(
              <MaterialIcons name="format-list-bulleted" size={size} color={color}/>
            ))
          }}
        />
        

      </Tab.Navigator>
  );
}

export default TabsRoutes;