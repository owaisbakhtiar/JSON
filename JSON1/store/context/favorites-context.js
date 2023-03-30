import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useState } from 'react'

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => { },
  removeFavorite: (id) => { },
});

function FavoritesContextProvider({ children }) {
  const [favoriteBusinessIds, setFavoriteBusinessIds] = useState([]);
  
  function addFavorite(id) {
    setFavoriteBusinessIds((currentFavIds) => [...currentFavIds, id]); 
  }

  function removeFavorite(id) {
    setFavoriteBusinessIds((currentFavIds) =>
      currentFavIds.filter((businessId) => businessId !== id)
    );
  }

  const value = {
    ids: favoriteBusinessIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  }

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}
export default FavoritesContextProvider;

const styles = StyleSheet.create({})