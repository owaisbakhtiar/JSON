import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors';

const MainButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default MainButton

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primaryColorLightTint,
    borderWidth: 1, borderColor: Colors.primaryColor, borderRadius: 18,
    justifyContent: 'center', alignSelf: 'center',
    paddingHorizontal: 15, paddingVertical: 3
  },
  buttonText: {
    fontSize: 14, fontWeight: 'bold', color: 'rgba(0, 151, 167, 1.0)',
  },
})