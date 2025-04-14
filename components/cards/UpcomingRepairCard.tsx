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

const UpcomingRepairCard = (props: Props) => {
  return (
    <View key={props.item.id} style={styles.container}>
      <Image source={props.item.image} style={styles.image} />
      <View>
        <CommonText
          text={props.item.bicycle}
          variant="titleLarge"
          textStyle={{fontFamily: 'Bold', color: Colors.light.accent}}
        />
        <CommonText
          text={props.item.repairType}
          variant="titleMedium"
          textStyle={{fontFamily: 'Bold', color: Colors.light.Hor}}
        />
        <CommonText
          text={props.item.date}
          variant="bodyLarge"
          textStyle={{color: Colors.light.Hor}}
        />
      </View>
    </View>
  );
};

export default UpcomingRepairCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
    padding: 12,
  },
  image: {
    width: 150,
    height: 150,
  },
});
