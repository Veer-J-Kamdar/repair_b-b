import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Appbar} from 'react-native-paper';
import {router} from 'expo-router';
import {Colors} from '@/constants/Colors';

type Props = {
  heading: any;
};

const RepairHeader = (props: Props) => {
  return (
    <Appbar.Header
      safeAreaInsets={{}}
      statusBarHeight={0}
      style={{
        backgroundColor: Colors.light.background,
      }}>
      <Appbar.BackAction
        onPress={() => router.back()}
        iconColor={Colors.light.accent}
      />
      <Appbar.Content
        title={props.heading}
        titleStyle={{
          fontFamily: 'Bold',
          fontSize: 20,
          color: Colors.light.accent,
        }}
      />
    </Appbar.Header>
  );
};

export default RepairHeader;

const styles = StyleSheet.create({});
