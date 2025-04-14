import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Drawer} from 'react-native-paper';

type Props = {
  item: {
    id: number;
    item: string;
    goto: () => void;
  };
};

const DrawerItemCard = (props: Props) => {
  return (
    <Drawer.Item
      label={props.item.item}
      // active={active === props.item.id.toString()}
      onPress={() => {
        props.item.goto();
      }}
    />
  );
};

export default DrawerItemCard;

const styles = StyleSheet.create({});
