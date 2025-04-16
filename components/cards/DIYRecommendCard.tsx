import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '@/constants/Colors';
import CommonText from '../CommonText';

type Props = {
  item: {
    id: number;
    title: string;
    desp: string;
    image: any;
  };
};

const DIYRecommendCard = (props: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={props.item.image}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <CommonText
          text={props.item.title}
          variant="headlineMedium"
          textStyle={styles.textStyle}
        />
        <CommonText
          text={props.item.desp}
          variant="titleLarge"
          textStyle={[styles.textStyle, {fontFamily: 'Regular'}]}
        />
      </View>
    </View>
  );
};

export default DIYRecommendCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  textContainer: {
    padding: 8,
    gap: 12,
    width: 280,
  },
  image: {
    height: 196,
    width: 296,
  },
  textStyle: {
    fontFamily: 'Bold',
    color: Colors.light.accent,
  },
});
