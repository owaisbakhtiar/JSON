import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors';
import MainButton from '../MainButton'
import DrawerListButton from './DrawerListButton'
import { useNavigation } from '@react-navigation/native'
import {DrawerActions} from "@react-navigation/routers";
import * as MailComposer from 'expo-mail-composer';
import * as WebBrowser from "expo-web-browser";

const openNewsletter = () => {
    WebBrowser.openBrowserAsync("https://mapchick.us7.list-manage.com/subscribe?u=9ea1114150f63993c51aca1ef&id=b73903ea77");
};

const CustomDrawer = (props) => {
  const navigation = useNavigation()
  return (
    <>
      <View style={styles.banner}>
        {/* Header */}
        <Image
          style={{height: 20, aspectRatio: 10 / 1,}}
          source={require('../../assets/images/bannerLogo.png')}
        />
      </View>

      <View style={{ alignItems: 'center', marginVertical: 10}}>
        <MainButton
          onPress={() => navigation.navigate('DrawerNavigator', {screen: 'Home'})}>
          Close window
        </MainButton>
      </View>
      {/* END Header */}


      <ScrollView style={{marginHorizontal: 15}}>

        {/* Instructions box */}
        <View style={[styles.boxRadius, { marginTop: 15 }]}>          
          <Text style={styles.subhead}>Common issues</Text>
          <DrawerListButton
            onPress={() => {navigation.navigate('FullAccessScreen')}}>
            Full access not working
          </DrawerListButton>
          <DrawerListButton
            onPress={() => {navigation.navigate('MapNotShowingScreen')}}>
            Map not showing
          </DrawerListButton>
          <DrawerListButton
            onPress={() => {navigation.navigate('FamilySharingScreen')}}>
            Family sharing{'\n'}(iPhone only)
          </DrawerListButton>
          <DrawerListButton
            onPress={() => {navigation.navigate('NewPhoneScreen')}}>
            Switching to new phone
          </DrawerListButton>
          <DrawerListButton
            onPress={() => {navigation.navigate('CompatabilityScreen')}}>
            Apple/Android{'\n'}compatability
          </DrawerListButton>
        </View>
            
        <View style={[styles.boxRadius, { marginTop: 5 }]}>
          <Text style={styles.subhead}>Instructions</Text>
          <DrawerListButton
            onPress={() => {navigation.navigate('StopRenewalScreen')}}>
            Stop auto renewal
          </DrawerListButton>
          <DrawerListButton
            onPress={() => {navigation.navigate('BottomTabBarScreen')}}>
            Bottom tab bar
          </DrawerListButton>
          <DrawerListButton
            onPress={() => {navigation.navigate('SearchFeaturesScreen')}}>
            Search features
          </DrawerListButton>
          <DrawerListButton
            onPress={() => {navigation.navigate('RestaurantMenusScreen')}}>
            Restaurant menus
          </DrawerListButton>
          <DrawerListButton
            onPress={() => {navigation.navigate('MorePhotosScreen')}}>
            More photos
          </DrawerListButton>
          <DrawerListButton
            onPress={() => {navigation.navigate('MapFeaturesScreen')}}>
            Map features
          </DrawerListButton>
        </View>

        <View style={{}}>
          <Text style={styles.subhead}>
            What's new
          </Text>
          <DrawerListButton
            onPress={() => {navigation.navigate('WhatsNewScreen')}}>
            List of latest updates
          </DrawerListButton>
       
          <Text style={[styles.subhead,{marginTop: 7}]}>
            Newsletter
          </Text>
          <DrawerListButton
            onPress={openNewsletter}>
            Sign up for our newsletter
          </DrawerListButton>
       
          <View style={[styles.boxRadius, { marginTop: 15 }]}>
            <Text style={styles.subhead}>Legal</Text>
          <DrawerListButton
            onPress={() => {navigation.navigate('TermsConditionsScreen')}}>
            Terms & conditions
          </DrawerListButton>
          <DrawerListButton
            onPress={() => {navigation.navigate('PrivacyPolicyScreen')}}>
            Privacy
            </DrawerListButton>
            </View>

            <Text style={styles.subhead}>Contact</Text>
            <TouchableOpacity onPress={() => MailComposer.composeAsync({recipients: ["mapchickapps@gmail.com"]})}>
              <Text style={styles.emailLink}>
              mapchickapps@gmail.com</Text>
            </TouchableOpacity>
        </View>
      
        
        <View style={{ alignItems: 'center', marginBottom: 100, marginTop: 20}}>
          <MainButton
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
            Close window
          </MainButton>
          </View>
      </ScrollView>
    </>
  );
};

export default CustomDrawer

const styles = StyleSheet.create({
  banner: {
    marginHorizontal: 15,
    marginTop: 75,
    backgroundColor: Colors.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 2
  },
  subhead: {
    fontWeight: 'bold',
    color: Colors.primaryColor,
    fontSize: 21,
  },
  boxRadius: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.primaryColor,
    padding: 10,
    marginBottom: 20,
  },    
  emailLink: {
    fontSize: 18,
    lineHeight: 19,
    textDecorationLine: 'underline',
    textDecorationColor: Colors.primaryColor
  },
})