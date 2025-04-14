import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Stack} from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack screenOptions={{headerShown: false}} initialRouteName="index">
      <Stack.Screen name="index" />
      <Stack.Screen name="signup" />
      <Stack.Screen name="forgotpassword" />
    </Stack>
  );
}

const styles = StyleSheet.create({});
