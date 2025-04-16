import {Image, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '@/components/Header';
import RepairHeader from '@/components/RepairHeader';
import {router, useLocalSearchParams} from 'expo-router';
import CommonButton from '@/components/buttons/CommonButton';
import CommonText from '@/components/CommonText';
import {Colors} from '@/constants/Colors';
import {Divider} from 'react-native-paper';
import CommonTextInput from '@/components/CommonTextInput';
import {Drawable} from '@/utilities/Drawable';
import {bikeType} from '@/constants/Constant';

export default function index() {
  const {heading} = useLocalSearchParams();

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <ScrollView contentContainerStyle={{gap: 12}}>
        <RepairHeader heading={heading} />
        <View style={styles.contentContainer}>
          <CommonTextInput
            label="Your Location"
            placeholder="ABC Street"
            secureText={false}
            paragraph={false}
          />
          <Image source={Drawable.Map} style={styles.map} />
        </View>
        <View style={styles.contentContainer}>
          <Divider />
        </View>
        <View style={styles.contentContainer}>
          <CommonText
            text="Which bike are you riding ?"
            variant="titleLarge"
            textStyle={styles.textStyle}
          />
          <View style={styles.bikeContainer}>
            {bikeType.map(item => (
              <Image
                key={item.bicycle}
                source={item.image}
                style={styles.bike}
              />
            ))}
          </View>
        </View>
        <View style={styles.contentContainer}>
          <Divider />
        </View>
        <View style={styles.contentContainer}>
          <CommonText
            text="Tell us what's wrong"
            variant="titleLarge"
            textStyle={styles.textStyle}
          />
          <CommonTextInput
            label="Please describe the problem"
            placeholder="I am facing issue in this part and I am current at this location"
            secureText={false}
            paragraph={true}
          />
          <CommonButton label="Review and confirm" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'Bold',
    color: Colors.light.accent,
  },
  bikeContainer: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: 'auto',
    height: 220,
    resizeMode: 'contain',
  },
  bike: {
    height: 96,
    width: 96,
  },
  contentContainer: {
    marginHorizontal: 16,
    paddingVertical: 8,
    gap: 12,
  },
});
