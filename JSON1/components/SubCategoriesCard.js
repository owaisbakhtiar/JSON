import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Colors from '../constants/Colors'

function SubCategoriesCard({ subCategoryTitle, count, onPress, imageUrl }) {

  return (
    <TouchableOpacity onPress={onPress} >
      <View style={styles.banner}>
        <Text style={styles.title}>{subCategoryTitle} </Text>
      </View>
      <View style={{}}>
        <Image
            style={{width: '100%', height: 180}}
            source={{ uri: imageUrl }}
        />
        </View>
      <View style={styles.listCountContainer}>
        <Text style={styles.listCount}>{count} options</Text>
      </View>
    </TouchableOpacity>
  );
}

export default SubCategoriesCard;

const styles = StyleSheet.create({
  banner: {
    width: '100%',
    paddingVertical: 2,
    backgroundColor: Colors.primaryColor,
    paddingHorizontal: 15
  },
  imageContainer: {
    width: '100%',
    height: 180,
  },
  listCountContainer: {
    marginBottom: 15,
    paddingHorizontal: 15
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: Colors.white
  },
  listCount: {
    fontSize: 14,
    fontWeight: 'normal',
  },
  image: {
    width: '100%',
    height: 180
  }
});
