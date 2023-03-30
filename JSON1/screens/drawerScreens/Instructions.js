import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import MapChickBanner from '../../components/MapChickBanner';
import Colors from '../../constants/Colors';
import MainButton from '../../components/MainButton';
import {DrawerActions} from "@react-navigation/routers";
import * as MailComposer from 'expo-mail-composer';


const { width } = Dimensions.get('window')
const calculatedWidth = (width-40) * 0.45
const calculatedHeight = (width-40) * 0.45

const Instructions = ({navigation}) => {
  return (
    <>
      <MapChickBanner />
      <ScrollView style={{ paddingTop: 5 }}>
        
        <View style={{marginHorizontal: 20, alignItems: 'center', marginBottom: 10}}>
          <Text style={{ fontSize: 16, lineHeight: 22, textAlign: 'center', }}>
            Questions? Please email:
          </Text>
          <TouchableOpacity onPress={() => MailComposer.composeAsync({recipients: ["mapchickapps@gmail.com"]})}>
            <Text style={styles.link}>mapchickapps@gmail.com</Text>
          </TouchableOpacity>
        </View>

        <MainButton
            onPress={() => navigation.navigate('DrawerNavigator', {screen: 'Home'})}>
            Home
        </MainButton>

        <View style={styles.rowContainer}>
          <View style={styles.infoContainer}>
            <View style={styles.iconContainer}>
              </View>
            <Text style={styles.title}>
              Stop auto{'\n'}renewal
            </Text>
            </View>
          <View style={styles.infoContainer}>
            <View style={styles.iconContainer}>
              </View>
            <Text style={styles.title}>
              Search{'\n'}features
            </Text>
            </View>
          </View>

        <View style={styles.rowContainer}>
          <View style={styles.infoContainer}>
            <View style={styles.iconContainer}>
              </View>
            <Text style={styles.title}>
              Saving{'\n'}favorites
            </Text>
            </View>
          <View style={styles.infoContainer}>
            <View style={styles.iconContainer}>
              </View>
            <Text style={styles.title}>
              Viewing{'\n'}menus
            </Text>
            </View>
          </View>

        <View style={styles.rowContainer}>
          <View style={styles.infoContainer}>
            <View style={styles.iconContainer}>
              </View>
            <Text style={styles.title}>
              ???????{'\n'}???????
            </Text>
            </View>
          <View style={styles.infoContainer}>
            <View style={styles.iconContainer}>
              </View>
            <Text style={styles.title}>
              ???????{'\n'}???????
            </Text>
            </View>
        </View>
        <View style={{height: 100}} />
      </ScrollView>
      </>
  )
}

export default Instructions

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
  },
  title: {
    fontSize: 32,
  },
  infoContainer: {
    width: calculatedWidth,
    alignItems: 'center',
    marginBottom: 15,
  },
  iconContainer: {
    width: '100%',
    height: calculatedHeight,
    backgroundColor: Colors.primaryColor,
    marginBottom: 4,
    borderRadius: 100,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'center'
  },
  button: {
    fontSize: 20,
    marginTop: 20,
    textDecorationLine: 'underline',
    color: 'blue',
  },
  link: {
    marginTop: 6,
    fontWeight: 'bold',
    fontSize: 16,
  },
})