import React, { useLayoutEffect } from 'react'
import { FlatList, View, Text } from 'react-native';
import SubCategoriesCard from '../components/SubCategoriesCard';
import InfoCard from '../components/InfoCard';
import MapChickBanner from '../components/MapChickBanner';
import { CATEGORIES, SUBCATEGORIES } from '../data/business-data';
import { CATEGORIESINFO } from '../data/dummy-info-data';

function SubCategoriesScreen({ navigation, route }) {


  const catId = route.params.categoryId;

 
    const displaySubCategories = SUBCATEGORIES.filter((catItem) => {
      return catItem.subCategoryIds.indexOf(catId) >= 0;
    });

    useLayoutEffect(() => {
      const categoryTitle = CATEGORIES.find((category) => category.id === catId).categoryTitle;
      navigation.setOptions({
        title: categoryTitle
      });
    }, [catId, navigation]
    );

 
    function renderSubCategories(itemData) {
      function pressHandler() {
        navigation.navigate('BusinessListScreen', {
          categoryId: itemData.item.id,
        });
      }

      return (
        <SubCategoriesCard
          subCategoryTitle={itemData.item.subCategoryTitle}
          imageUrl={itemData.item.imageUrl}
          count={itemData.item.count}
          onPress={pressHandler}
        />
      );
    }
  
  
    function renderCategoryInfoItem(itemData) {
    function pressHandler() {
      navigation.navigate('InfoDetailScreen', {
        categoryId: itemData.item.id,
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
      return (
        <View style={{height: 100}} />
      );
    };

    return (
      <>
        <MapChickBanner />
        
        <FlatList
          style={{marginTop: 10}}
          data={displaySubCategories}
          keyExtractor={(item) => item.id}
          renderItem={renderSubCategories}
          ListHeaderComponent={Header}
          ListFooterComponent={Footer}
        />
    </>
  );
}

export default SubCategoriesScreen;
