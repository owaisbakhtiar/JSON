import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors';

const FavoritesButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default FavoritesButton

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 18,
    justifyContent: 'center', alignSelf: 'center',
    paddingHorizontal: 10, paddingVertical: 3, marginTop: 3,
  },
  buttonText: {
    fontSize: 15, fontWeight: 'bold', color: 'white', textAlign: 'center'
  },
})