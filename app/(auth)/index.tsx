import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CommonTextInput from '@/components/CommonTextInput';
import CommonButton from '@/components/buttons/CommonButton';
import TextButton from '@/components/buttons/TextButton';
import {Drawable} from '@/utilities/Drawable';
import CommonText from '@/components/CommonText';
import {Colors} from '@/constants/Colors';
import {router} from 'expo-router';
import {Icons} from '@/utilities/Icons';

export default function index() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{paddingRight: 120}}>
        <Image style={styles.image} source={Drawable.Wheel} />
      </View>
      <View style={{flex: 1, gap: 12, justifyContent: 'space-between'}}>
        <View style={[styles.contentContainer, {gap: 18}]}>
          <CommonText
            variant="displayLarge"
            text="Welcome back!"
            textStyle={{
              fontFamily: 'Bold',
              color: Colors.light.text,
              alignSelf: 'center',
            }}
          />
          <CommonTextInput
            label="Enter your Email"
            placeholder="example@example.com"
            secureText={false}
          />
          <CommonTextInput
            label="Enter your Password"
            placeholder="**********"
            secureText={true}
          />
          <CommonButton
            label="Enter"
            onPress={() => router.push('/home')}
            icon="chevron-right"
          />
        </View>
        <View style={styles.contentContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 12,
            }}>
            <TextButton
              label="Forgot Password?"
              onPress={() => router.push('/(auth)/forgotpassword')}
              underLine={true}
            />
            <TextButton
              label="Sign Up"
              onPress={() => router.push('/(auth)/signup')}
              underLine={true}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    padding: 12,
  },
  image: {
    width: 350,
    height: 350,
  },
});
