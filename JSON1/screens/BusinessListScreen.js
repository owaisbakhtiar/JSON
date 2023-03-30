import { View, FlatList, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useLayoutEffect } from 'react'
import { BUSINESS, SUBCATEGORIES } from '../data/business-data';
import BusinessListCard from '../components/BusinessListCard';
import MapChickBanner from '../components/MapChickBanner';
import Colors from '../constants/Colors';

function BusinessListScreen({ route, navigation, }) {

  const catId = route.params.categoryId;

  const displayBusiness = BUSINESS.filter((catItem) => {
    return catItem.subCategoryIds.indexOf(catId) >= 0;
  });

    useLayoutEffect(() => {
      const categoryTitle = SUBCATEGORIES.find(
        (category) => category.id === catId
        ).subCategoryTitle;
        navigation.setOptions({
          title: categoryTitle
        });
      }, [catId, navigation]
    );
  
  function renderBusinessList(itemData) {
    const item = itemData.item
        
    return <BusinessListCard
      id={itemData.item.id}
      businessTitle={itemData.item.businessTitle}
      imageUrl={itemData.item.imageUrl}
      location={itemData.item.location}
      hours1={itemData.item.hours1}
      hours2={itemData.item.hours2}
      userComments={itemData.item.userComments}
    />
  }

  const Header = () => {
    return (
      null
    )
  }
  
    const Footer = () => {
      return (
        <View style={{height: 100}} />
      );
    };

  return (
    <>
      <MapChickBanner />

      <FlatList
        style={{marginTop: 10}}
        data={displayBusiness}
        keyExtractor={(item) => item.id}
        renderItem={renderBusinessList}
        ListFooterComponent={Footer}

      />
    </>
  );
}

export default BusinessListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
    subBannerContainer: {
    alignItems: 'center',
    marginBottom: 5,
    borderBottomWidth: 1,
    paddingBottom: 2,
    borderBottomColor: Colors.primaryColorLightIcon
  },
});
