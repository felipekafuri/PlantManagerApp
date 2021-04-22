import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import colors from '../styles/colors'

import userImage from '../assets/me.png'
import fonts from '../styles/fonts'

export function Header(){
  return(
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá</Text>
        <Text style={styles.userName}>Felipe</Text>
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