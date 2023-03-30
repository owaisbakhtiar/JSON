import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native';
import TabNavigator from './navigators/TabNavigator';
import FavoritesContextProvider from './store/context/favorites-context';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

const navTheme = DefaultTheme;
navTheme.colors.background = 'white';

function App() {
  return (
    <FavoritesContextProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </FavoritesContextProvider>
  );
}

export default App;