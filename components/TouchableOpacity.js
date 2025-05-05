import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomTouchableOpacity = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress} >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

export default CustomTouchableOpacity;

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#212121',
        width: 354,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 74,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 19,
        fontWeight: '600',
        fontFamily: 'Poppins-SemiBold',
    },
});
