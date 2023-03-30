import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';

function InfoCard({ title, onPress, imageUrl }) {
  return (
      <TouchableOpacity
        onPress={onPress}
      >
        <View style={styles.flexContainer}>
          <Image
            style={styles.image}
            source={{ uri: imageUrl }}
          />
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableOpacity>
  );
}

export default InfoCard;

const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20, 
    marginRight: 10,
    marginVertical: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 3
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0097a7'
  },
});
