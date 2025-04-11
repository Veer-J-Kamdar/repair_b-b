import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {
  item: {
    id: number;
    image: any;
  };
};

const RepairCard = (props: Props) => {
  return (
    <View>
      <Image
        source={props.item.image}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

export default RepairCard;

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 250,
  },
});
