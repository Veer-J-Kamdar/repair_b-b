import {StyleSheet} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';

type Props = {
  text: string;
  variant: any;
  textStyle?: any;
};

const CommonText = (props: Props) => {
  return (
    <Text variant={props.variant} style={props.textStyle}>
      {props.text}
    </Text>
  );
};

export default CommonText;
