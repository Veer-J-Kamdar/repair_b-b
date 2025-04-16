import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Stack} from 'expo-router';

export default function DIYLayout() {
  return (
    <Stack screenOptions={{headerShown: false}} initialRouteName="index">
      <Stack.Screen name="index" />
      <Stack.Screen name="diyPage2" />
      <Stack.Screen name="diyPage3" />
    </Stack>
  );
}

const styles = StyleSheet.create({});
