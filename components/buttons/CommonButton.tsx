import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {Colors} from '@/constants/Colors';

type Props = {
  label: string;
  onPress?: () => void;
  buttonStyle?: any;
  icon?: any;
};

const CommonButton = (props: Props) => {
  return (
    <Button
      icon={props.icon}
      mode="contained"
      onPress={props.onPress}
      buttonColor={Colors.light.accent}
      textColor="white"
      style={{
        padding: 8,
        margin: 0,
        ...props.buttonStyle,
        borderRadius: 48 ,
      }}
      contentStyle={{flexDirection: 'row-reverse'}}
      labelStyle={{
        fontSize: 16,
        fontFamily: 'Bold',
      }}>
      {props.label}
    </Button>
  );
};

export default CommonButton;

const styles = StyleSheet.create({});
