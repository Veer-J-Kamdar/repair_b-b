import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Switch} from 'react-native-paper';
import CommonText from '../CommonText';
import {Colors} from '@/constants/Colors';

type Props = {
  item: {
    id: number;
    repairType: string;
  };
};

const ScheduleRepairItem = (props: Props) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View
      key={props.item.id}
      style={{flexDirection: 'row', alignItems: 'center'}}>
      <Switch
        value={isSwitchOn}
        onValueChange={onToggleSwitch}
        color={Colors.light.accent}
      />
      <CommonText
        text={props.item.repairType}
        variant="bodyLarge"
        textStyle={styles.textStyle}
      />
    </View>
  );
};

export default ScheduleRepairItem;

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'Regular',
    color: Colors.light.accent,
  },
});
