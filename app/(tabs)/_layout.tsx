import { Tabs } from 'expo-router';
import { Image } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#304FFE',
        tabBarInactiveTintColor: '#B9C3CD',
        tabBarLabelStyle: {
          fontFamily: 'Poppins-SemiBold',
          fontWeight: '600',
          fontSize: 11,
        },
      }}
    >

      <Tabs.Screen
        name="index"
        options={{
          title: 'Branches',
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={require('../../assets/images/branches.png')}
              style={{
                width: 23,
                height: 28,
                tintColor: color,
              }}
              resizeMode="contain"
            />
          ),
        }}
      />

<Tabs.Screen
        name="vehicles"
        options={{
          title: 'Vehicles',
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={require('../../assets/images/vehicles.png')}
              style={{
                width: 28,
                height: 28,
                tintColor: color,
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
      
      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={require('../../assets/images/account.png')}
              style={{
                width: 29,
                height: 28,
                tintColor: color,
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tabs>
  );
}
