import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CommonText from './../CommonText';
import {Colors} from '@/constants/Colors';

type Props = {
  item: {
    id: number;
    bicycle: string;
    repairType: string;
    date: string;
    image: any;
  };
};

const PastRepairCard = (props: Props) => {
  return (
    <View key={props.item.id} style={styles.container}>
      <Image source={props.item.image} style={styles.image} />
      <View>
        <CommonText
          text={props.item.bicycle}
          variant="titleLarge"
          textStyle={{
            fontFamily: 'Bold',
            color: Colors.light.text,
          }}
        />
        <CommonText
          text={props.item.repairType}
          variant="titleMedium"
          textStyle={{fontFamily: 'Bold', color: Colors.light.text}}
        />
        <CommonText text={props.item.date} variant="bodyLarge" />
      </View>
    </View>
  );
};

export default PastRepairCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
    padding: 12,
    opacity: 0.4,
  },
  image: {
    width: 120,
    height: 120,
  },
});
