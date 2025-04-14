import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import {Colors} from '@/constants/Colors';

type Props = {
  label: string;
  placeholder: string;
  secureText: boolean;
  paragraph: boolean | undefined;
};

const CommonTextInput = (props: Props) => {
  return (
    <View>
      <TextInput
        mode="outlined"
        label={props.label}
        placeholder={props.placeholder}
        style={{width: '100%', height: 50, fontFamily: 'Regular'}}
        theme={{
          colors: {
            background: Colors.light.background,
          },
        }}
        multiline={props.paragraph}
        activeOutlineColor={Colors.light.accent}
        secureTextEntry={props.secureText}
        textColor="black"
        placeholderTextColor="gray"
        onChangeText={text => console.log(text)}
      />
    </View>
  );
};

export default CommonTextInput;

const styles = StyleSheet.create({});
