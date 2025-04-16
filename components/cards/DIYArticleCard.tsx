import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {List} from 'react-native-paper';
import {Colors} from '@/constants/Colors';

type Props = {
  item: {
    id: number;
    title: string;
  };
};

const DIYArticleCard = (props: Props) => {
  return (
    <View style={{marginHorizontal: 12}}>
      <List.Accordion
        style={{backgroundColor: 'white'}}
        titleStyle={styles.titleStyle}
        title={props.item.title}
        rippleColor={Colors.light.accent}>
        <List.Item title="Demo Item" />
      </List.Accordion>
    </View>
  );
};

export default DIYArticleCard;

const styles = StyleSheet.create({
  titleStyle: {
    fontFamily: 'Regular',
    color: Colors.light.accent,
  },
});
