import React, { useState } from 'react'
import { FlatList, Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import CategoriesCard from '../components/CategoriesCard'
import InfoCard from '../components/InfoCard';
import MapChickBanner from '../components/MapChickBanner'
import { CATEGORIES, CATEGORIESDATA } from '../data/business-data'
import { CATEGORIESINFO } from '../data/dummy-info-data';
import Colors from '../constants/Colors'
import {DrawerActions} from "@react-navigation/routers";

function CategoriesScreen({ navigation }) {
  
  
  function renderCategoriesCard(itemData) {
    function pressHandler() {
      console.log(itemData);
      // return
      // in case you want to pass the entire item, simply pass itemdata as a prop and get it in route.params on detail screen as we get other props
      navigation.navigate('SubCategoriesScreen', { //  you can pass entire obj or each item separately in navigation as props
        categoryId: itemData.item.id,
        categoryInfoData: itemData.item.categoryInfoData
      })
    }
    return (
      <CategoriesCard
        categoryTitle={itemData.item.categoryTitle}
        imageUrl={itemData.item.imageUrl}
        count={itemData.item.count}
        onPress={pressHandler}
      />
    )
  }


  function renderCategoryInfoItem(itemData) {
    function pressHandler() {
      navigation.navigate('InfoDetailScreen', {
        categoryId: itemData.item.id,
        title: itemData.item.title,
        imageUrl: itemData.item.imageUrl
        }
      );
    }
    return (
      <InfoCard
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        onPress={pressHandler}
      />
    );
  }


  const Header = () => {
    return (
      <FlatList
      style={{ marginBottom: 5 }}
      horizontal
      data={CATEGORIESINFO}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryInfoItem}
    />
    )
  }
  const Footer = () => {
    return <View style={{ height: 100 }} />
  }
  return (
    <>
      <MapChickBanner />
      <TouchableOpacity
        style={styles.subBannerContainer}
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      >
        <Text style={{}}>Instructions/support</Text>
      </TouchableOpacity>

      
      <FlatList
        // data={CATEGORIES}
        data={CATEGORIESDATA} // Passed new array with category info array for circles items in each category 
        keyExtractor={(item) => item.id}
        renderItem={renderCategoriesCard}
        ListHeaderComponent={Header}
        ListFooterComponent={Footer}
      />
    </>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
  noteContainer: {
    marginHorizontal: 15,
    borderRadius: 15,
    padding: 10,
  },
  buttonContainer: {
    marginTop: 10,
    justifyContent: 'center'
  },
  touchableContainer: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 30,
    marginBottom: 10,
    marginLeft: 'auto',
    marginRight: 'auto', 
  },
  buttonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: 20,
    paddingVertical: 3
  },
  subBannerContainer: {
    alignItems: 'center',
    marginBottom: 5,
    borderBottomWidth: 1,
    paddingBottom: 2,
    borderBottomColor: Colors.primaryColorLightIcon
  },

});