import {Image, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '@/components/Header';
import RepairHeader from '@/components/RepairHeader';
import {useLocalSearchParams} from 'expo-router';
import {bikeType} from '@/constants/Constant';
import CommonText from '@/components/CommonText';
import {Colors} from '@/constants/Colors';
import {Divider} from 'react-native-paper';
import ScheduleRepairList from '@/components/sections/ScheduleRepairList';
import CommonTextInput from '@/components/CommonTextInput';
import {Drawable} from '@/utilities/Drawable';
import CommonButton from '@/components/buttons/CommonButton';
import TextButton from '@/components/buttons/TextButton';

export default function index() {
  const {heading} = useLocalSearchParams();
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <ScrollView
        contentContainerStyle={{gap: 12}}
        showsVerticalScrollIndicator={false}>
        <RepairHeader heading={heading} />
        <View style={styles.contentContainer}>
          <CommonText
            text="Specify bike..."
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
            text="...and things to check"
            variant="titleLarge"
            textStyle={styles.textStyle}
          />
          <ScheduleRepairList />
        </View>
        <View style={styles.contentContainer}>
          <Divider />
        </View>
        <View style={styles.contentContainer}>
          <CommonText
            text="Locate the nearest workshop"
            variant="titleLarge"
            textStyle={styles.textStyle}
          />
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
          <TextButton
            label="Pick a date"
            underLine={false}
            onPress={() => {}}
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
    alignSelf: 'center',
  },
  contentContainer: {
    marginHorizontal: 16,
    paddingVertical: 8,
    gap: 12,
  },
  bikeContainer: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bike: {
    height: 96,
    width: 96,
  },
  map: {
    width: 'auto',
    height: 220,
    resizeMode: 'contain',
  },
});
