import AppLoading from 'expo-app-loading'
import React, {useEffect} from 'react'
import * as Notifications from 'expo-notifications'

import {
  Jost_300Light,
  Jost_400Regular,
  Jost_500Medium,
  Jost_600SemiBold,
  useFonts
} from '@expo-google-fonts/jost'

import Routes from './src/routes'
import { PlantProps } from './src/libs/storage'

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_300Light,
    Jost_400Regular,
    Jost_500Medium,
    Jost_600SemiBold
  })

  useEffect(()=>{
    // const subscriptions = Notifications.addNotificationReceivedListener(
    //   async notifications=>{
    //     const data = notifications.request.content.data.plant as PlantProps

    //     console.log(data)
    //   }
    // )

    // return () => subscriptions.remove()

    async function notifications(){
      const data = await Notifications.getAllScheduledNotificationsAsync()
      console.log(data)
    }
  },[])

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <Routes/>
  );
}

