import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '@/components/Header';
import RepairHeader from '@/components/RepairHeader';
import {useLocalSearchParams} from 'expo-router';

export default function index() {
  const {heading} = useLocalSearchParams();
  return (
    <SafeAreaView>
      <Header />
      <ScrollView>
        <RepairHeader heading={heading} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
