import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Test = () => {
  return (
    <View style={{
       }}>
      <Image
        style={[styles.image, {aspectRatio: 1 / 2,}]}
        
        source={require('../assets/images/star1.jpg')}
      />
    </View >
 

  )
}

export default Test

const styles = StyleSheet.create({
  image: {
    width: '70%',
    alignSelf: 'center',
    height: undefined,
  }
})