import { View, StyleSheet, Text } from 'react-native';

function InfoDetailScreen({ route, navigation }) {

  // Category Id passed from my CategoriesScreen. The const now names it catId.
  const catId = route.params.categoryId;

  // I am able to pass the catId, but I cannot figure out how to pass the
  // title and imageUrl const now names it catId.
  // I've done about 10 online tutorials but can't seem to make it work here. 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CatId = {catId}</Text>
    </View>
  );
}

export default InfoDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  }
});
