import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native'
import React, { useContext } from 'react'
import { FavoritesContext } from '../store/context/favorites-context'
import { BUSINESS } from '../data/business-data'
import Colors from '../constants/Colors'
import MapChickBanner from '../components/MapChickBanner'
import MainButton from '../components/MainButton';
import { Ionicons } from '@expo/vector-icons';

const FavoritesScreen = ({ navigation, route, id, }) => {
    
    return (
        <>
        <MapChickBanner />

        <ScrollView>
            <View style={{
                borderWidth: 1, borderColor: Colors.primaryColor,
                marginHorizontal: 20, marginTop: 15, borderRadius: 20,
                padding: 10
            }}>
                <View style={{alignItems: 'center'}}>
                    <Text style={{color: Colors.primaryColor, fontSize: 22, fontWeight: 'bold'}}>
                        businessTitle
                    </Text>
                    <View style={{width: '100%', marginHorizontal: 10, height: 130, borderRadius: 10}}>
                        <View style={{backgroundColor: '#ccc', width: '100%', height: 130, borderRadius: 10}}>
                        {/* {imageUrl} */}
                        </View>
                    </View>
                </View>

                <View style={{marginHorizontal: 10, marginTop: 20, marginBottom: 5}}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                        Add/change comments
                    </Text>
                </View>
                <View style={{marginHorizontal: 0}}>
                    <TextInput
                        style={{borderWidth: 1, borderRadius: 10, padding: 10, borderColor: '#bbb', minHeight: 100}}
                        multiline
                        placeholder="Enter comments here"
                        fontSize={16}
                    />
                </View>
                
                <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 20}}>
                    <MainButton
                        onPress={() => navigation.goBack()}>
                            SAVE
              </MainButton>
                                  <MainButton
                        onPress={() => navigation.goBack()}>
                            DELETE
                    </MainButton>

                </View>
          </View>
                          <View style={{ marginHorizontal: 20, marginTop: 10, marginBottom: 20 }}>
                    <Text style={{ fontSize: 18, textAlign: 'center' }}>
                        To view all your saved
                    </Text>
                    <Text style={{ fontSize: 18, textAlign: 'center' }}>
                        favorites, press the <Ionicons name="heart-outline" size={24} color={Colors.primaryColor} /> icon
                    </Text>
                    <Text style={{ fontSize: 18, textAlign: 'center', marginTop: 4 }}>
                        at bottom of screen.
                    </Text>
                </View>

        </ScrollView>
        </>
    )
}



export default FavoritesScreen

const styles = StyleSheet.create({
    image: {
        width: '70%',
        alignSelf: 'center',
        height: undefined,
    }
})