import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {Colors} from '@/constants/Colors';

type Props = {
  label: string;
  onPress?: () => void;
  underLine: boolean;
};

const TextButton = (props: Props) => {
  return (
    <Button
      mode="text"
      onPress={props.onPress}
      style={{
        backgroundColor: 'transparent',
        padding: 0,
        margin: 0,
      }}
      rippleColor={Colors.light.accent}
      labelStyle={{
        color: Colors.light.text,
        fontSize: 18,
        fontFamily: 'Bold',
        textDecorationLine: props.underLine ? 'underline' : 'none',
      }}>
      {props.label}
    </Button>
  );
};

export default TextButton;

const styles = StyleSheet.create({});
