import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const CarCategoryCard = ({ image, category, categoryColor, number, numberColor, onPress, backgroundColor, imageStyle }) => {
    return (
        <View style={styles.wrapper}>
            <Pressable  
                style={[styles.container, {backgroundColor}]}
                onPress={onPress}
            >   
                <View style={styles.imageContainer}>
                    <Image 
                        source={image} 
                        style={[styles.imageDimensions, imageStyle]} 
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={[styles.categoryText, { color: categoryColor }]}>{category}</Text>
                    <Text style={[styles.categoryNumber, { color: numberColor }]}>{number}</Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 20,
        marginTop:10,
    },

    container: {
        width: 120,
        height: 149,
        borderRadius: 20,
        padding: 5,
        marginHorizontal:19.5,
    },

    imageContainer: {
        flex: 1,
    },

    imageDimensions: {
        width: 151,
        height: 86,
        marginLeft: -35,
    },

    textContainer: {
        paddingBottom: 10,
    },

    categoryText: {
        fontSize: 14,
        fontWeight: '500',
        fontFamily: 'Poppins-SemiBold',
        textAlign: 'center',
    },

    categoryNumber: {
        fontSize: 14,
        fontWeight: '600',
        fontFamily: 'Poppins-SemiBold',
        textAlign: 'center',
    },
})

export default CarCategoryCard;
