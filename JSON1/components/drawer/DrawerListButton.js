import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react';
import Colors from '../../constants/Colors';

const DrawerListButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.buttonText}> {children}</Text>
    </TouchableOpacity>
  )
}

export default DrawerListButton

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 18,
    marginBottom: 8,
    textDecorationLine: 'underline',
    textDecorationColor: Colors.primaryColor

  },
})
