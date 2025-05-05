import { Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const showForgotPasswordAlert = () => {
    Alert.alert(
        "Forgot Password",  
        "Check your email. We have sent you a link to reset your password. The link is valid for 2 hours.",  
        [{ text: "OK" }]
    );
};

const ForgotPasswordLink = () => {
    return (
        <TouchableOpacity onPress={showForgotPasswordAlert}>
            <Text style={styles.forgotText}>Forgot Password</Text>
        </TouchableOpacity>
    );
};

export default ForgotPasswordLink;


const styles = StyleSheet.create({
    forgotText: {
        color: '#FFFFFF', 
        fontSize: 14,
        fontWeight: '500',
        fontFamily: 'Poppins-SemiBold',
        textAlign: 'center',
        marginTop: 15,
    },
});


