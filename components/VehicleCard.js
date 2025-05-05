import { Pressable, Text, View, StyleSheet, Image } from 'react-native';

const VehicleCard = ({ brand, price, model, billingPeriod, engineDescription, image, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
        <View style={styles.row}>
            <Text style={styles.brandText}>{brand}</Text>
            <Text style={styles.priceText}>{price}</Text>
        </View>

     
        <View style={styles.row}>
            <Text style={styles.modelText}>{model}</Text>
            <Text style={styles.billingPeriodText}>{billingPeriod}</Text>
        </View>

      
        <View style={styles.row}>
            <Text style={styles.engineText}>Engine</Text>
            <Text style={styles.engineDescriptionText}>{engineDescription}</Text>
        </View>

        <Image source={image} style={styles.image} resizeMode="cover" />
    </Pressable>
  );
}

export default VehicleCard;

const styles = StyleSheet.create({
  container: {
    width: 354,
    height: 355,
    borderRadius: 35,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 30,
    marginBottom: 20,
    
  },

  image: {
    width: 350,
    height: 200,
  },

  textContainer: {
    padding: 10,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
    marginHorizontal: 30,
  },

  brandText: {
    fontFamily: 'Gilroy-Heavy',
    fontWeight: '800',
    fontSize: 34,
    color: '#212121',
    textAlign: 'left',
    marginTop:30,
  },

  priceText: {
    fontFamily: 'Gilroy-Light',
    fontWeight: '300',
    fontSize: 34,
    color: '#304FFE',
    textAlign: 'right',
    marginTop:30,
  },

  modelText: {
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '400',
    fontSize: 14,
    color: '#7D8EA3',
    textAlign: 'left',
  },

  billingPeriodText: {
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '400',
    fontSize: 14,
    color: '#7D8EA3',
    textAlign: 'right',
  },

  engineText: {
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '400',
    fontSize: 14,
    color: '#212121',
    textAlign: 'left',
  },

  engineDescriptionText: {
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '400',
    fontSize: 14,
    color: '#212121',
    textAlign: 'right',
  },
});