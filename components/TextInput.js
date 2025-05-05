import { TextInput, View, StyleSheet } from 'react-native';

const CustomTextInput = ({ placeholder }) => {
    return (
        <View style={styles.inputWrapper}>
            <TextInput 
                style={styles.input} 
                placeholder={placeholder} 
                placeholderTextColor="#212121"
            />
        </View>
    );
};

export default CustomTextInput;

const styles = StyleSheet.create({
    inputWrapper: {
        backgroundColor: '#FFFFFF',
        width: 354,
        height: 60,
        borderRadius: 74,
        justifyContent: 'center',
        paddingHorizontal: 30,
    },
    input: {
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold',
        fontWeight: '400',
        color: '#212121',
        textAlign: 'center',
    },
});
