import { ScrollView, StyleSheet, Text, View, Image, Linking, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useContext } from 'react'
import MapChickBanner from '../components/MapChickBanner';
import { BUSINESS, CATEGORIES, SUBCATEGORIES } from '../data/business-data';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import ReadMore from 'react-native-read-more-text';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FavoritesContext } from '../store/context/favorites-context';

const BusinessDetailScreen = ({ route, navigation, id }) => {
	  const favoriteBusinessCtx = useContext(FavoritesContext);

    const businessId = route.params.businessId;
  
    const selectedBusiness = BUSINESS.find((business) => business.id === businessId);

    const businessIsFavorite = favoriteBusinessCtx.ids.includes(businessId);

        useLayoutEffect(() => {
          const selectedBusiness = BUSINESS.find (
            (business) => business.id === businessId
            ).title;
            navigation.setOptions({
              title: selectedBusiness
            });
        }, [businessId, navigation]);
  
    function favoritesToggleOnOffHandler() {
        if (businessIsFavorite) {
            favoriteBusinessCtx.removeFavorite(businessId);
        } else {
            favoriteBusinessCtx.addFavorite(businessId);
        }
    }

    function favoritesNavigationHandler() {
        if (businessIsFavorite) {
            ''
        } else {
            navigation.navigate('FavoritesEditScreen', {
                businessId: id,
            });
        }
    }


    function navigationAndToggleCombined() {
        favoritesToggleOnOffHandler();
        favoritesNavigationHandler();
    }  


    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <TouchableOpacity
                        onPress={navigationAndToggleCombined}
                    >
                        <Ionicons
                            name={businessIsFavorite ? 'heart' : 'heart-outline'}
                            size={28}
                            color={Colors.primaryColor}
                        />
                    </TouchableOpacity>
                )
            }
        });
    }, [navigation, navigationAndToggleCombined]);
  

    _renderTruncatedFooter = (handlePress) => {
        return (
            <Text style={styles.footer} onPress={handlePress}>
                Read more
            </Text>
        );
    }

    _renderRevealedFooter = (handlePress) => {
        return (
            <Text style={[styles.footer, {color: 'red'}]} onPress={handlePress}>
                Show less
            </Text>
        );
    }

    _handleTextReady = () => {
        // ...
    }
  
    return (
      <>
      <MapChickBanner />
          <ScrollView style={{height: '100%'}}>
              <View style={{}}>
                  <Image
                      style={{width: '100%', height: 240}}
                      source={{ uri: selectedBusiness.imageUrl }}
                  />
                  {businessIsFavorite ? (
                      <View style={styles.favoriteOption}>
                          <Text style={styles.favoriteOptionText}>
                              <Ionicons name="heart" size={14} color={Colors.primaryColor} /> Saved favorite
                          </Text>
                      </View>
                  )  : null}
              </View>

              <View style={styles.mainContainer}>
                  <View style={styles.locationHoursContainer}>
                      <View>
                          <Text style={{ fontSize: 16 }}>
                              {selectedBusiness.location}
                          </Text>
                      </View>
              
                      <View style={{}}>
                          <Text style={{ fontSize: 16, textAlign: 'right' }}>
                              {selectedBusiness.hours1}
                          </Text>
                          <Text style={{ fontSize: 16, textAlign: 'right' }}>
                              {selectedBusiness.hours2}
                          </Text>
                
            </View>
          </View>
          <View>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>About {selectedBusiness.businessTitle}</Text>

          <ReadMore
              numberOfLines={3}
              renderTruncatedFooter={this._renderTruncatedFooter}
              renderRevealedFooter={this._renderRevealedFooter}
              onReady={this._handleTextReady}>
              <Text style={{fontSize: 16}}>
                {selectedBusiness.description}
              </Text>
            </ReadMore>
            </View>
          <View style={{ marginVertical: 15, backgroundColor: '#ddd', padding: 15, borderRadius: 15 }}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>User comments</Text>

          <Text style={{fontSize: 16}}>{selectedBusiness.userComments}</Text>
      
          </View>

          
        {/* <Text>{selectedBusiness.website}</Text>
        <Text>{selectedBusiness.facebook}</Text>
        <Text>{selectedBusiness.email}</Text>
        <Text>{selectedBusiness.phone}</Text>
        <Text>{selectedBusiness.whatsapp}</Text> */}
        
{/* CONTAINER for wifi/cellular items */}
        <View style={styles.wifiItemsBox}>
          <Text style={styles.wifiBoxTitle}>
            These features require{'\n'} WiFi or cellular data
          </Text>

{/* CONTAINER for Menu and photo buttons */}
          <View style={styles.rowBox}>
            <TouchableOpacity style={styles.menuPhotosBox}>
              <MaterialCommunityIcons
                name="book-open-page-variant-outline"
                size={40}
                color="white"
              />
              <Text style={styles.menuPhotoTitle}>
                View{'\n'}menu
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.menuPhotosBox}>
              <Fontisto
                name="photograph"
                size={37}
                color="white" />
              <Text style={styles.menuPhotoTitle}>
                More{'\n'}photos
              </Text>
            </TouchableOpacity>  
          </View>

{/* CONTACT icons in a row */}
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <TouchableOpacity
              onPress={() => { Linking.openURL("mailto") }}>
              <MaterialCommunityIcons
                name="web"
                size={30}
                color='white'
              />
            </TouchableOpacity>
    
            <TouchableOpacity
              onPress={() => { Linking.openURL("mailto") }}>
              <FontAwesome
                name="facebook-square"
                size={30}
                color='white'
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={()=>{Linking.openURL("mailto")}}>
              <MaterialCommunityIcons
                name="email"
                size={30}
                color='white' />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={()=>{Linking.openURL("mailto")}}>
              <MaterialCommunityIcons
                name="phone"
                size={30}
                color={Colors.primaryDark}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={()=>{Linking.openURL("mailto")}}>
              <FontAwesome
                  name="whatsapp"
                  size={30}
                  color={Colors.primaryDark} />
            </TouchableOpacity>
          </View>
        </View>
{/* END OF container for wifi/cellular items */}
        <Text>{selectedBusiness.mapChick}</Text>
          </View>

      </ScrollView>
    </>
  )
  
}

export default BusinessDetailScreen

const styles = StyleSheet.create({
    footer:
      { color: Colors.primaryColor, marginTop: 3, fontSize: 16 },

    favoriteOption: {position: 'absolute', top: 20, right: 0, paddingVertical: 2, paddingRight: 15,
    paddingLeft: 15, backgroundColor: 'white', borderTopLeftRadius: 10, borderBottomLeftRadius: 10
  },
    
  favoriteOptionText: { fontWeight: 'bold', color: Colors.primaryColor, textAlign: 'right' },

  mainContainer: { marginHorizontal: 15, marginTop: 10, },

  locationHoursContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },

  favoritesContainer: {
    position: 'absolute', top: 20, right: 0,
    paddingVertical: 2, paddingRight: 15, paddingLeft: 15,
    backgroundColor: 'white', borderTopLeftRadius: 10, borderBottomLeftRadius: 10
  },
  baseText: {
    fontSize: 16
  },
  favoritesText: {
    fontWeight: 'bold', color: Colors.primaryColor, textAlign: 'right'
  },
  wifiItemsBox: {
    marginBottom: 15, paddingHorizontal: 15, paddingVertical: 10,
    borderWidth: 1, borderColor: '#ddd', borderRadius: 15,
    backgroundColor: Colors.primaryColor, 
  },
  wifiBoxTitle: {
    textAlign: 'center', marginBottom: 10,
    color: 'white', fontWeight: 'bold'
  },
  rowBox: {
    flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15
  },
  menuPhotosBox: {
    flexDirection: 'row', paddingHorizontal: 15, paddingVertical: 3,
    alignItems: 'center', backgroundColor: Colors.primaryDark, borderRadius: 10
  },
  menuPhotoTitle: {
    marginLeft: 6, fontWeight: 'bold', color: 'white'
  },
  userCommentsBox: {
    marginVertical: 15, padding: 15,
    backgroundColor: '#ddd', borderRadius: 15
  },
})