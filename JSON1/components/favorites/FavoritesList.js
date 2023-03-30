import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import MapChickBanner from '../MapChickBanner';
import FavoritesListCard from './FavoritesListCard';


const FavoritesList = ({items}) => {
    function renderBusinessList(itemData) {
    const item = itemData.item
    
    const BusinessListProps = {
      id: item.id,
      businessTitle: item.businessTitle,
      imageUrl: item.imageUrl,
      location:item.location,
      hours1: item.hours1,
      hours2: item.hours2,
      userComments: item.userComments,
      subCategoryIds: item.subCategoryIds,
      subCategoryTitle:item.subCategoryTitle,

    };
    
    return <FavoritesListCard {...BusinessListProps} />
  }

  return (
<>
      <FlatList
        horizontal={true}
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderBusinessList}
    />
      </>

  );
}

export default FavoritesList

const styles = StyleSheet.create({})