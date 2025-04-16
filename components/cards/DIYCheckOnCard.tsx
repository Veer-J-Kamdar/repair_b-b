import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {
  item: {
    id: number;
    image: any;
  };
};

const DIYCheckOnCard = (props: Props) => {
  return (
    <View key={props.item.id}>
      <Image
        source={props.item.image}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
};

export default DIYCheckOnCard;

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 220,
    resizeMode: 'contain',
  },
});
