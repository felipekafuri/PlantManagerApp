import AppLoading from 'expo-app-loading'
import React from 'react'

import {
  Jost_300Light,
  Jost_400Regular,
  Jost_500Medium,
  Jost_600SemiBold,
  useFonts
} from '@expo-google-fonts/jost'

import Routes from './src/routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_300Light,
    Jost_400Regular,
    Jost_500Medium,
    Jost_600SemiBold
  })

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <Routes/>
  );
}

