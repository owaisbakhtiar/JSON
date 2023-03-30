import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Map from '../screens/Map'
import Search from '../screens/Search'
import StackNavigator from './StackNavigator';
import FavoritesScreen from '../screens/FavoritesScreen';
import FavoritesEditScreen from '../screens/FavoritesEditScreen';

import CurrencyConverter from '../screens/CurrencyConverter';
import TipCalculator from '../screens/TipCalculator';
import MapScreen from '../screens/MapScreen';
import Colors from '../constants/Colors';
import { FontAwesome } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: Colors.primaryDark,
        tabBarInactiveBackgroundColor: Colors.primaryColor,
        tabBarActiveTintColor: Colors.white,
        tabBarInactiveTintColor: Colors.white,
        tabBarStyle: { backgroundColor: Colors.primaryColor, borderTopWidth: 2, borderTopColor: 'white' },
        headerTitleStyle: { fontSize: 20, color: Colors.primaryColor },
        

      }}>
      <Tab.Screen name="Home" component={StackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons
              name="home-outline"
              size={25}
              color="white"
            />
          )
        }}
      />
      <Tab.Screen name="Favorites" component={FavoritesScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons
              name="heart-outline"
              size={26}
              color="white"
            />
          )
        }}
      />

      <Tab.Screen name="Peso converter" component={CurrencyConverter}
        options={{
          tabBarIcon: () => (
            <FontAwesome
              name="dollar"
              size={20}
              color="white"
            />
          )
        }}
      />
      <Tab.Screen name="Tip calculator" component={TipCalculator}
      options={{
          tabBarIcon: () => (
            <FontAwesome5
              name="money-bill-alt"
              size={20}
              color="white"
            />
          )
        }}
      />
      <Tab.Screen name="Map" component={MapScreen}options={{
          tabBarIcon: () => (
            <FontAwesome5
              name="map"
              size={20}
              color="white"
            />
          )
        }}
      />

    </Tab.Navigator>
  );
}

export default TabNavigator
