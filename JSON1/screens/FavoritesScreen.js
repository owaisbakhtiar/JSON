import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React, { useContext } from 'react'
import FavoritesList from '../components/favorites/FavoritesList'
import MapChickFavoritesList from '../components/favorites/MapChickFavoritesList'
import { FavoritesContext } from '../store/context/favorites-context'
import { BUSINESS } from '../data/business-data'
import Colors from '../constants/Colors'
import MapChickBanner from '../components/MapChickBanner'

const FavoritesScreen = ({navigation}) => {
  const favoriteBusinessCtx = useContext(FavoritesContext);

  const favoriteBusiness = BUSINESS.filter(business =>
    favoriteBusinessCtx.ids.includes(business.id));
  
  
  
  if (favoriteBusiness.length === 0) {
    return (
      <View style={{backgroundColor: 'white'}}>
      <MapChickBanner />
      <ScrollView>
          <View style={{ marginHorizontal: 15, marginBottom: 100 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
              You have no saved favorites
            </Text>
            <Text style={{ fontSize: 18, }}>
              To save a favorite, navigate to a business screen
              and press the outlined star in the upper-right corner.{'\n'}
              {'\t'}A solid star indicates that a business has already been saved as a favorite.
            </Text>
            <View style={{marginTop: 10}}>
              <Image
                style={[styles.image, {aspectRatio: 1 / 2,}]}
                source={require('../assets/images/star1.jpg')}
              />
            </View >
          </View>

          

                </ScrollView>
</View>
    )
  }

  return (
    <View>
      <MapChickBanner />
      <ScrollView>
        <Text style={styles.categoryTitle}>Breakfast</Text>
        <Text style={styles.savedFavoritesTitle}>Saved favorites</Text>
        <FavoritesList items={favoriteBusiness} />
        
        <View style={styles.thinBorder} />

        <Text style={styles.savedFavoritesTitle}>MapChick favorites</Text>
        <MapChickFavoritesList items={favoriteBusiness} />

        <View style={styles.thickBorder} />


        <Text style={styles.categoryTitle}>Lunch</Text>
        <FavoritesList items={favoriteBusiness} />
        
        <View style={styles.thinBorder} />

        <Text style={styles.savedFavoritesTitle}>MapChick favorites</Text>
        <MapChickFavoritesList items={favoriteBusiness} />
        
        <View style={styles.thickBorder} />
        

        <Text style={styles.categoryTitle}>Dinner</Text>
        <FavoritesList items={favoriteBusiness} />
          
        <View style={styles.thinBorder} />

        <Text style={styles.savedFavoritesTitle}>MapChick favorites</Text>
        <MapChickFavoritesList items={favoriteBusiness} />
        
        <View style={styles.thickBorder} />

        <Text style={styles.categoryTitle}>Tours</Text>
        <Text style={styles.savedFavoritesTitle}>Saved favorites</Text>
        <Text style={{ marginLeft: 20, fontSize: 18 }}> There are currently no saved favorites</Text>
        
        <View style={styles.thinBorder} />

        <Text style={styles.savedFavoritesTitle}>MapChick favorites</Text>
        <Text style={{ marginLeft: 20, fontSize: 18 }}> There are currently no saved favorites</Text>

        <View style={styles.thickBorder} />


        <View style={{height: 100}} />

        </ScrollView>
    </View>
  )
}
{/* <TouchableOpacity
        onPress={() => navigation.navigate('FavoritesEditScreen')} >
        </TouchableOpacity> */}
export default FavoritesScreen

const styles = StyleSheet.create({
  categoryTitle: {
    marginLeft: 20,
    fontSize: 30,
    color: Colors.primaryColor
  },
  savedFavoritesTitle: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  thinBorder: {
    marginLeft: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
    paddingBottom: 10,
    marginBottom: 10
  },
  thickBorder: {
    marginLeft: 20,
    borderBottomWidth: 4,
    borderBottomColor: Colors.primaryColor,
    paddingBottom: 10,
    marginBottom: 10
  },
  image: {
    width: '70%',
    alignSelf: 'center',
    height: undefined,
  },
})