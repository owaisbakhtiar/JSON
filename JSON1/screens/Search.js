import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Search = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search</Text>
       <TouchableOpacity
      onPress={() => navigation.navigate('Screen2')}>
      <Text style={styles.button}>Go to screen 2</Text>
    </TouchableOpacity>
       <TouchableOpacity
        onPress={() => navigation.navigate('HomeScreen')}>
      <Text style={styles.button}>Home</Text>
    </TouchableOpacity>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 32
  },
  button: {
    fontSize: 20,
    marginTop: 20,
    textDecorationLine: 'underline',
    color: 'blue'
  }

})