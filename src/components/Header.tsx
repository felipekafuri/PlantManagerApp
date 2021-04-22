import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import colors from '../styles/colors'
import AsyncStorage from '@react-native-async-storage/async-storage'

import userImage from '../assets/me.png'
import fonts from '../styles/fonts'

export function Header(){

  const [name, setName] = useState<string>()

  async function loadUser(){
    const user = await AsyncStorage.getItem(('@PlantManager:user'))

    if(!user){
      return ''
    }

    return user
  }

  useEffect(() =>{
     loadUser().then(response=>setName(response))
  },[name])

  return(
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá</Text>
        <Text style={styles.userName}>{name}</Text>
      </View>

      <Image source={userImage}
        style={styles.image}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: getStatusBarHeight(),
    paddingVertical: 20,
  },
  image:{
    width: 70,
    height: 70,
    borderRadius: 40
  },
  greeting:{
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text
  },
  userName:{
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 40
  }
})