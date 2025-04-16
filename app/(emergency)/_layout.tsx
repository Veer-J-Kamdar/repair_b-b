import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Stack} from 'expo-router';

export default function EmergencyLayout() {
  return (
    <Stack screenOptions={{headerShown: false}} initialRouteName="index">
      <Stack.Screen name="index" />
      <Stack.Screen name="schedulePage2" />
      <Stack.Screen name="schedulePage3" />
    </Stack>
  );
}

const styles = StyleSheet.create({});
