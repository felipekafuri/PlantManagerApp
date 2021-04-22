import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity
} from 'react-native'

import { Button } from '../components/Button'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

export function UserIdentification() {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const [name, setName] = useState<string>()
  const { navigate } = useNavigation()

  function handleInputBlur() {
    setIsFocused(false)
    setIsFilled(!!name)
  }


  function handleInputFocus() {
    setIsFocused(true)
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value)
    setName(value)
  }


  function handleSubmit() {
    navigate('Confirmation')
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.wrapper}>
            <View style={styles.form}>
              <View style={styles.header}>
                <Text style={styles.emoji}>
                  {isFilled ? '😃' : '😄'}
                </Text>
                  <Text style={styles.title}>
                    Como podemos {"\n"}
                    chamar você?
                  </Text>
                <TextInput
                  style={[
                    styles.input,
                    (isFocused || isFilled) && {
                      borderColor: colors.green
                    }
                  ]}
                  placeholder="John Doe"
                  onBlur={handleInputBlur}
                  onFocus={handleInputFocus}
                  onChangeText={handleInputChange}
                >
                </TextInput>

                <View style={styles.footer}>
                <Button title="Confirmar" onPress={handleSubmit} />
                </View>

              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
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

  form: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 54,
    alignItems: 'center'
  },

  header: {
    alignItems: 'center',
    width: '100%',
  },

  title: {
    fontSize: 32,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 20
  },

  emoji: {
    fontSize: 44
  },

  input: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: colors.gray,
    width: '100%',
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: 'center'
  },

  footer: {
    width: '100%',
    marginTop: 40
  },

})