import { Text, View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomSearchBar from '../../components/SearchBar.js';
import CarCategoryCard from '../../components/CarCategoryCard.js';
import VehicleCard from '../../components/VehicleCard.js';

export default function Home() {
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CustomSearchBar 
          placeholder="Search for a car"  
          onPress={() => console.log('Search pressed')}
        />

        <View style={styles.container1}>
          <View>
            <CarCategoryCard 
              category="Standard"
              categoryColor="#FFFFFF"
              number="56"
              numberColor="#FFFFFF"
              backgroundColor="#304FFE"
              image={require('../../assets/images/standard.png')}
              imageStyle={''} 
              onPress={() => console.log('Standard pressed')}
            />
          </View>
          
          <View>
            <CarCategoryCard 
              category="Prestige"
              categoryColor="#212121"
              number="22"
              numberColor="#7D8EA3"
              backgroundColor="#FFFFFF"
              image={require('../../assets/images/prestige.png')} 
              imageStyle={''}
              onPress={() => console.log('Prestige pressed')}
            />
          </View>

          <View>
            <CarCategoryCard 
              category="SUV"
              categoryColor="#212121"
              number="34"
              numberColor="#7D8EA3"
              backgroundColor="#FFFFFF"
              image={require('../../assets/images/suv.png')} 
              imageStyle={{marginLeft: -61}}
              onPress={() => console.log('SUV pressed')}
            />
          </View>
        </View>

        <View>
          <Text style={styles.text}>Available vehicles</Text>
        </View>

        <View>
          <VehicleCard
            brand="Toyota"
            price="$350"
            model="Yaris iA"
            billingPeriod="/month"
            engineDescription="4-Cyl 1.5Liter"
            image={require('../../assets/images/toyota.png')} 
            onPress={() => console.log('Toyota pressed')}
          />
        </View>

        <View>
          <VehicleCard
            brand="Hyundai"
            price="$250"
            model="i20"
            billingPeriod="/month"
            engineDescription="4-Cyl 1.5Liter"
            image={require('../../assets/images/toyota.png')} 
            onPress={() => console.log('Hyundai pressed')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  root: {
    flex: 1,
    backgroundColor: '#F9F9FA',
    paddingBottom:-25
  },

 
  container1:{
    flexDirection: 'row',
    right: 0,
  },

  text: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    fontWeight: '400',
    color: '#212121',
    textAlign: 'left',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10,
  },

})