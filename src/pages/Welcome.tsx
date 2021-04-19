import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native'

import wateringImg from '../assets/watering.png'
import { Button } from '../components/Button'
import colors from '../styles/colors'

export function Welcome() {
  return (
   <SafeAreaView style={styles.container}>
      <Text style={styles.title}>    
        Gerencie {'\n'}
        suas plantas {'\n'}
        de forma fácil
      </Text>

      <Image source={wateringImg} style={styles.image} resizeMode="contain"/>

      <Text style={styles.subtitle}>
      Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
      sempre que precisar.
      </Text>

    <Button styleButton={styles.button} styleText={styles.buttonText} title=">"/>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  title:{
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38
  },

  subtitle:{
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading
  },

  button:{
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    marginBottom: 16,
    height: 56,
    width: 56
  },

  image:{
    width: 292,
    height: 284
  },

  buttonText:{
    color: colors.white
  }
})