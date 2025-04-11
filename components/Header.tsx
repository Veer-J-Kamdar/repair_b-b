import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Appbar} from 'react-native-paper';
import {Colors} from '@/constants/Colors';
import {Icons} from '@/utilities/Icons';

type Props = {};

const Header = (props: Props) => {
  return (
    <Appbar.Header
      safeAreaInsets={{}}
      statusBarHeight={0}
      style={{
        backgroundColor: Colors.light.accent,
        elevation: 6,
      }}>
      <Appbar.Action
        icon={Icons.Home}
        onPress={() => {}}
        iconColor={Colors.light.background}
      />
      <Appbar.Content title="Repair B&B" titleStyle={styles.title} />
      <Appbar.Action
        icon="account-circle"
        onPress={() => {}}
        iconColor={Colors.light.background}
      />
    </Appbar.Header>
  );
};

export default Header;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Bold',
    alignSelf: 'center',
    color: Colors.light.background,
  },
});
