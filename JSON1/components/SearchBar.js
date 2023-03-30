import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View style={styles.searchBarLayout}>
          <Ionicons name="search" size={18} color="black" />
          <View style={{}}>
            <Text>CLEAR</Text>
          </View>
        </View>

  )
}

export default SearchBar

const styles = StyleSheet.create({
  searchBarLayout: {
    width: '90%',
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: Colors.primaryColor,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: '5%',
    marginBottom: 10,
  },

})