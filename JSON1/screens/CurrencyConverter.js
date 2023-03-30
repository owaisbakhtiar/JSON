import SwitchSelector from 'react-native-switch-selector'
import React, { useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableWithoutFeedback, View, TextInput, Keyboard, Image, } from 'react-native'
// import { TextInput } from 'react-native-paper'
import Colors from '../constants/Colors'
import currencyConversion from '../util/currencyConversion'
import { useConversionRate } from '../hooks/useConversionRateHook'
import { CURRENCY_MAP } from '../service/currencyService'
import MapChickBanner from '../components/MapChickBanner'

const CurrencyConverter = () => {
  const options = [
    { label: 'USD', value: 'MXNUSD' },
    { label: 'EUR', value: 'MXNEUR' },
    { label: 'CAD', value: 'MXNCAD' },
  ]

  const [type, setType] = useState('MXNUSD')
  const [convertAmount, setConvertAmount] = useState('')

  let conversionRate = useConversionRate()
  const convertedAmount = currencyConversion(
    convertAmount,
    conversionRate[type],
  )

  return (
    
    <SafeAreaView>
      
      <MapChickBanner />
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss} 
        accessible={false}
      >
        <ScrollView style={{backgroundColor: 'white'
          
        }}>
        <View style={{ }}>
          <View style={{ alignItems: 'center', paddingTop: 10 }}>
            <View>
              <Text style={styles.wifiOrCellText}>
                Requires WiFi or cell data
              </Text>
            </View>

            <View style={{alignSelf: "center",
        marginBottom: 20,
        width: '90%',
        backgroundColor: 'white', alignItems: 'center'}}>
              <TextInput
              multiline={false}
              style={styles.input}
              placeholder="Peso amount"
              placeholderTextColor={'gray'}
              keyboardType="number-pad"
              // theme={{ colors: { primary: Colors.primaryColor } }}
              onChangeText={setConvertAmount}
              value={convertAmount}
            />

            <View style={{ marginTop: 5 }}>
              <Text style={styles.convertToText}>
                Convert to...
              </Text>
            </View>

            <SwitchSelector
              initial={0}
              onPress={setType}
              height={70}
              fontSize={18}
              textColor="#757575"
              selectedColor="white"
              buttonColor={Colors.primaryColor}
              borderColor={Colors.primaryColor}
              borderRadius={35}
              borderWidth={2}
              bold
              hasPadding
              options={options}
              style={styles.switchSelectorStyle}
            />
            <View style={styles.convertedAmountRow}>
              <Text style={styles.convertedAmount}>= </Text>
              <Text
                style={styles.convertedAmount}
              >
                {convertedAmount} {CURRENCY_MAP[type]}
              </Text>
                </View>    
              </View>
              <View style={{height: 100}}/>
            </View>
            </View>
      </ScrollView>


      </TouchableWithoutFeedback>
    </SafeAreaView>
  )
}

export default CurrencyConverter

const styles = StyleSheet.create({
input: {
    height: 35,
    width: 150,
    paddingLeft: 15,
    paddingHorizontal: 10,
    fontSize: 20,
    color: 'black',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: 'white'
  },
    //Image
    image: {
    width: '100%', height: undefined, aspectRatio: 5 / 3,
    marginTop: 20,
  },

  //Containers
  backgroundTintContainer: {
    width: '100%', backgroundColor: Colors.primaryColorLightTint,
    alignItems: 'center',
    marginTop: 10, paddingVertical: 10,
  },
  centeredView: {
    flex: 1, justifyContent: 'flex-start',
    alignItems: 'center', marginTop: '30%',
  },
  closeKeyboardContainer:{
                backgroundColor: Colors.primaryColor,
                paddingVertical: 3,
                paddingHorizontal: 10,
                borderRadius: 11,
              },
  convertedAmountRow: { flexDirection: 'row' },
imageContainer:{
            flex: 1,
            alignItems: 'center',
            width: '100%',
  },
  modalView: {
    backgroundColor: 'white', borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000', shadowOffset: { width: 0, height: 2, },
    shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,
    margin: 20, padding: 35,
  },
  openButton: {
    backgroundColor: 'red', borderRadius: 20,
    justifyContent: 'center',
    paddingHorizontal: 30, paddingVertical: 5,
    elevation: 2,
  },
  textInputContainer: {
    width: '80%', backgroundColor: 'white',
    borderWidth: 2, borderColor: Colors.primaryColor, borderRadius: 10,
    textAlign: 'center',
    fontSize: 24, fontWeight: 'bold',
    marginTop: 5, paddingLeft: 10, paddingVertical: 10,
  },
    //Text
  closeKeyboardText: { fontSize: 17, fontWeight: 'bold', color: 'white' },
  convertedAmount: {
    fontSize: 32,
    marginTop: 10, marginBottom: 10,
  },
  convertToText: { fontSize: 17, fontWeight: 'bold' },
  wifiOrCellText: {
    fontSize: 18, lineHeight: 18, textAlign: 'center',
    marginBottom: 5, 
  },
  textStyle: {
    fontSize: 25, fontWeight: 'bold', color: 'white',
    textAlign: 'center',
  },
  modalText: {
    textAlign: 'center',
    marginBottom: 15,  
  },
  modalTextAlert: {
    textAlign: 'center', color: 'red',
    marginBottom: 10,
  },
  switchSelectorStyle: {
    width: 200, borderColor: Colors.primaryColor,
    fontWeight: 'bold',
    marginTop: 5,
  },
})
