import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView
} from 'react-native'

import { Feather } from '@expo/vector-icons'

import wateringImg from '../assets/watering.png'
import colors from '../styles/colors'
import fonts from '../styles/fonts'
import { useNavigation } from '@react-navigation/core'

export function Welcome() {

const {navigate} = useNavigation()

  function handleStart(){
    navigate('UserIdentification')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie {'\n'}
        suas plantas de {'\n'}
        forma fácil
      </Text>

        <Image source={wateringImg} resizeMode="contain" />

        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
          sempre que precisar.
      </Text>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={handleStart}
        >
          <Feather name="chevron-right" size={20} color="#ffff" />
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
    fontFamily: fonts.heading,
    lineHeight: 34
  },

  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text
  },

  button: {
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    marginBottom: 16,
    height: 56,
    width: 56
  }
})