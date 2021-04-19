import React from "react";
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  styleButton: object
  styleText: object
  title: string
}

export function Button({ styleButton, title, styleText, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      style={styleButton}
      activeOpacity={0.8}
      {...rest}
    >
      <Text style={styleText}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})