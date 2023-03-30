import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import FavoritesButton from './FavoritesButton';

function FavoritesListCard({ id, subCategoryIds, subCategoryTitle, businessTitle, userComments, location, hours1, hours2, onPress, imageUrl }){
  const navigation = useNavigation();

  function favoritesEditHandler() {
    navigation.navigate('FavoritesEditScreen', {
     businessId: id,
   });
  }
  
  return (
      
      <View style={{
      justifyContent: 'center', alignItems: 'center', marginLeft: 20,
      width: 300, backgroundColor: 'white', borderRadius: 20,
      borderColor: Colors.primaryColor, borderWidth: 1, padding: 10
    }}>
    
      
        
        
          <Text style={styles.title}>{businessTitle} </Text>
          <Text style={styles.text}>{location}</Text>
          <Text style={styles.text}>{hours1}</Text>
          <Text style={styles.text}>{hours2}</Text>
          <Text style={[styles.textBold, {color: Colors.primaryColor, marginTop: 5}]}>Also a MapChick favorite</Text>


        <View style={{width: '100%', marginTop: 5}}>
          <Image
            style={{width: '100%', height: 120, borderRadius: 15}}
            source={{ uri: imageUrl }}
        />

          <View style={{ width: '100%',alignItems: 'center', marginTop: 5 }}>
            <FavoritesButton
              onPress={favoritesEditHandler}>
              <Text><AntDesign name="edit" size={20} color="white" />  Add/change comments</Text>
            </FavoritesButton>
            <View style={{marginTop: 10}} />

          <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-around', alignItems: 'center', marginTop: 5}}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}>
              <Text style={{fontSize: 17, fontWeight: 'bold', textAlign: 'center'}}>View{'\n'}business</Text>
            </TouchableOpacity>            
            <TouchableOpacity
              onPress={() => navigation.goBack()}>
              <Ionicons name="trash-outline" size={30} color="red" />
            </TouchableOpacity>
            
</View>

        </View>
        </View>

      {/* <View>
         <ReadMoreCard text={userComments} />
        <Text style={styles.bottomRowText}>{userComments}</Text>
</View> */}
      
    </View>


  );
}

export default FavoritesListCard

const styles = StyleSheet.create({
  title: {
    fontSize: 20, fontWeight: 'bold', color: Colors.primaryColor
  },
  text: {
    fontSize: 17
  },
  textBold: {
    fontSize: 17, fontWeight: 'bold'
  }
});