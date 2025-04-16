import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '@/components/Header';
import RepairHeader from '@/components/RepairHeader';
import {useLocalSearchParams} from 'expo-router';
import CommonText from '@/components/CommonText';
import {Colors} from '@/constants/Colors';
import CommonTextInput from '@/components/CommonTextInput';
import DIYCheckOnSection from '@/components/sections/DIYCheckOnSection';
import DIYRecommendSection from '@/components/sections/DIYRecommendSection';
import DIYArticleSection from '@/components/sections/DIYArticleSection';

export default function index() {
  const {heading} = useLocalSearchParams();
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <ScrollView>
        <RepairHeader heading={heading} />
        <View style={styles.contentContainer}>
          <CommonTextInput
            label="Search"
            placeholder="flat tire"
            secureText={false}
            paragraph={false}
          />
        </View>
        <View style={styles.contentContainer}>
          <CommonText
            text="This season you should check on"
            variant="titleLarge"
            textStyle={styles.textStyle}
          />
          <DIYCheckOnSection />
        </View>
        <View style={styles.contentContainer}>
          <CommonText
            text="DIY videos & articles by theme"
            variant="titleLarge"
            textStyle={styles.textStyle}
          />
          <DIYArticleSection />
        </View>
        <View style={styles.contentContainer}>
          <CommonText
            text="Recommnded for you"
            variant="titleLarge"
            textStyle={styles.textStyle}
          />
          <DIYRecommendSection />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    marginHorizontal: 16,
    paddingVertical: 8,
    gap: 12,
  },
  textStyle: {
    fontFamily: 'Bold',
    color: Colors.light.accent,
    alignSelf: 'center',
  },
});
