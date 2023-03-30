import { createDrawerNavigator } from '@react-navigation/drawer';
import CategoriesScreen from '../screens/CategoriesScreen';
import FullAccessScreen from '../screens/drawerScreens/FullAccessScreen';
import MapNotShowingScreen from '../screens/drawerScreens/MapNotShowingScreen';
import FamilySharingScreen from '../screens/drawerScreens/FamilySharingScreen';
import NewPhoneScreen from '../screens/drawerScreens/NewPhoneScreen';
import CompatabilityScreen from '../screens/drawerScreens/CompatabilityScreen';
import StopRenewalScreen from '../screens/drawerScreens/StopRenewalScreen';

import BottomTabBarScreen from '../screens/drawerScreens/BottomTabBarScreen';
import SearchFeaturesScreen from '../screens/drawerScreens/SearchFeaturesScreen';
import RestaurantMenusScreen from '../screens/drawerScreens/RestaurantMenusScreen';
import MorePhotosScreen from '../screens/drawerScreens/MorePhotosScreen';
import MapFeaturesScreen from '../screens/drawerScreens/MapFeaturesScreen';
import TermsConditionsScreen from '../screens/drawerScreens/TermsConditionsScreen';
import PrivacyPolicyScreen from '../screens/drawerScreens/PrivacyPolicyScreen';


import Colors from '../constants/Colors';
import CustomDrawer from '../components/drawer/CustomDrawer';
import { useNavigation } from '@react-navigation/native'

const Drawer = createDrawerNavigator();

const defaultScreenOptions = {
  gestureEnabled: true,
  headerStyle: {backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '#fff'},
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  headerTitleStyle: { fontSize: 20, color: Colors.primaryColor },
};

const DrawerNavigator = (props) => {
  const navigation = useNavigation()

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={defaultScreenOptions}
    >
      <Drawer.Screen name="Home" component={CategoriesScreen} />
      
      <Drawer.Screen name="FullAccessScreen" component={FullAccessScreen}
        options={{ title: 'Full access issues' }}
      />
      
      <Drawer.Screen name="MapNotShowingScreen" component={MapNotShowingScreen}
        options={{ title: 'Map not showing' }}
      />

      <Drawer.Screen name="FamilySharingScreen" component={FamilySharingScreen}
        options={{ title: 'Family sharing' }}
      />

      <Drawer.Screen name="NewPhoneScreen" component={NewPhoneScreen}
        options={{ title: 'New phone' }}
      />

      <Drawer.Screen name="CompatabilityScreen" component={CompatabilityScreen}
        options={{ title: 'Compatability' }}
      />

      <Drawer.Screen name="StopRenewalScreen" component={StopRenewalScreen}
        options={{ title: 'Stop auto renewal' }}
      />

      <Drawer.Screen name="BottomTabBarScreen" component={BottomTabBarScreen}
        options={{ title: 'Bottom tab bar' }}
      />

      <Drawer.Screen name="SearchFeaturesScreen" component={SearchFeaturesScreen}
        options={{ title: 'Search features' }}
      />

      <Drawer.Screen name="RestaurantMenusScreen" component={RestaurantMenusScreen}
        options={{ title: 'Restaurant menus' }}
      />

      <Drawer.Screen name="MorePhotosScreen" component={MorePhotosScreen}
        options={{ title: 'More photos' }}
      />

      <Drawer.Screen name="MapFeaturesScreen" component={MapFeaturesScreen}
        options={{ title: 'Map features' }}
      />

      <Drawer.Screen name="TermsConditionsScreen" component={TermsConditionsScreen}
        options={{ title: 'Terms & conditions' }}
      />

      <Drawer.Screen name="PrivacyPolicyScreen" component={PrivacyPolicyScreen}
        options={{ title: 'Privacy policy' }}
      />

    </Drawer.Navigator>
  );
}

export default DrawerNavigator
