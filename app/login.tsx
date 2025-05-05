import { Image, StyleSheet, View, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomTouchableOpacity from '../components/TouchableOpacity.js';
import CustomTextInput from '../components/TextInput.js';
import ForgotPasswordLink from '../components/ForgotPassword.js';
import { useRouter } from 'expo-router';

export default function Login() {

    const router = useRouter();

    const handleLogin = () => {
        router.replace('/'); 
    };

    return (
        <View style={styles.root}>
                <ImageBackground
                    source={require('../assets/images/imagebg.png')}
                    style={styles.bgImage}
                    resizeMode="contain"
                    imageStyle={styles.imageStyle}
                >
                    <SafeAreaView style={styles.safeArea}>
                        <View style={styles.container}> 
                            <View style={styles.logoContainer}>
                                <Image 
                                    style={styles.logo} 
                                    source={require('../assets/images/logo.png')}
                                    resizeMode="contain"
                                />
                                <Image 
                                    style={styles.text} 
                                    source={require('../assets/images/text.png')}
                                    resizeMode="contain"
                                />
                            </View>

                            
                            
                            
                            <View style={styles.inputContainer}>
                                <CustomTextInput placeholder="Sahar Soffer"/>
                                <CustomTextInput placeholder="****************"/>
                            </View>

                            
                            <View>
                                <ForgotPasswordLink/>
                            </View>

                

                            <View style={styles.buttonContainer}>
                                <CustomTouchableOpacity title={'LOG IN'} onPress={handleLogin}/>
                            </View>
                        </View>
                    </SafeAreaView>
                </ImageBackground>  
        </View>      
    )
}

const styles = StyleSheet.create({

    root: {
        flex: 1,
        backgroundColor: '#304FFE'
    },


    bgImage:{
       flex:1
    },

    imageStyle: {
        position: 'absolute',
        top: 235,
        left: -210,
        width: 855,
        height: 641,
        opacity: 1,
    },

    safeArea: {
        flex: 1,
    },

    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 70,
    },
    logo: {
        width: 120,
        height: 146,
    },
    text: {
        width: 146,
        height: 38,
        marginTop: 20,
    },

    inputContainer: {
        width: '100%',
        marginTop: 50,
        gap: 30,
        alignItems: 'center',
    },
    buttonContainer: {
        width: '100%',
        marginTop: 30,
        alignItems: 'center',
    },

})

