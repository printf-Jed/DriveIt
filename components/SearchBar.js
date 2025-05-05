import { View, TextInput, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const CustomSearchBar = ({ onPress, placeholder }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor='#212121'
      />
      <Pressable onPress={onPress} style={styles.iconWrapper}>
        <Ionicons name="search" size={17} color="#212121" />
      </Pressable>
    </View>
  );
};

export default CustomSearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 74,
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 8,
    marginHorizontal: 20,
    marginVertical: 20,
  },

  input: {
    height: 48,
    fontSize: 16,
    color: '#212121',
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '400',
    fontSize: 14,
    textAlign: 'center',
  },

  iconWrapper: {
    width: 17,
    height: 17,
    left:-20,
    alignItems: 'center',
  },

});
