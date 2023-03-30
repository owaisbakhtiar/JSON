import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

function MapChickFavoritesListCard({ id, subCategoryIds, subCategoryTitle, businessTitle, userComments, location, hours1, hours2, onPress, imageUrl }){
  const navigation = useNavigation();

  function favoritesEditHandler() {
    navigation.navigate('FavoritesEditScreen', {
     businessId: id,
   });
  }
  
  return (
    <View style={{
      justifyContent: 'center', alignItems: 'center', marginLeft: 20,
      width: 'auto', backgroundColor: 'white', borderRadius: 20,
      borderColor: Colors.primaryColor, borderWidth: 1, padding: 10,
      flexDirection: 'row',
    }}>      
      <View style={{width: 100, marginRight: 10}}>
        <Image
          style={{height: 100, borderRadius: 15}}
          source={{ uri: imageUrl }}
        />
      </View>

        <View style={{}}>
          <Text style={styles.title}>{businessTitle} </Text>
          <Text style={styles.bottomRowText}>{location}</Text>
          <Text style={styles.bottomRowText}>{hours1}</Text>
          <Text style={styles.bottomRowText}>{hours2}</Text>
            <Text style={{fontWeight: 'bold', color: Colors.primaryColor}}>View business</Text>



          

        </View>

      

    </View>

  );
}

export default MapChickFavoritesListCard

const styles = StyleSheet.create({
    title: {
    fontSize: 18, fontWeight: 'bold', color: Colors.primaryColor
  },
  text: {
    fontSize: 17
  },
  textBold: {
    fontSize: 17, fontWeight: 'bold'
  }

});