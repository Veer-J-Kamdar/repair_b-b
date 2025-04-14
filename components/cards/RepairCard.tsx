import {Image, StyleSheet} from 'react-native';
import React from 'react';
import {TouchableRipple} from 'react-native-paper';

type Props = {
  item: {
    id: number;
    image: any;
    goto: any;
  };
};

const RepairCard = (props: Props) => {
  return (
    <TouchableRipple key={props.item.id} onPress={props.item.goto}>
      <Image
        source={props.item.image}
        style={styles.image}
        resizeMode="contain"
      />
    </TouchableRipple>
  );
};

export default RepairCard;

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 250,
  },
});
