import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text,  View,  } from 'react-native'
import MapChickBanner from '../components/MapChickBanner'

const CurrencyConverter = () => {

  return (
    <SafeAreaView>
      <MapChickBanner />
      <View style={{ }}>
        <Text style={{fontSize: 22}}>
          CurrencyConverter
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default CurrencyConverter

const styles = StyleSheet.create({

})
