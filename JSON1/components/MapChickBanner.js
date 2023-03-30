import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors.js'

const MapChickBanner = () => {
  return (
    <View style={styles.mainContainer}>
      <Image
        style={styles.bannerLogo}
        source={require('../assets/images/bannerLogo.png')}
      />
    </View>
  )
}

export default MapChickBanner

const styles = StyleSheet.create({
  mainContainer: {
    height: 33,
    backgroundColor: Colors.primaryColor,
    alignItems: 'center',
    paddingTop: 4,
    marginBottom: 5,
  },
  bannerLogo: {
    width: 110, height: 25,
    aspectRatio: 10 / 1,
  },
})
