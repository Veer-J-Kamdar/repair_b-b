import {FlatList, ListRenderItem, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScheduleRepairItem from '../cards/ScheduleRepairItem';
import {scheduleRepairList} from '@/constants/Constant';

type ItemData = {id: number; repairType: string};

const ScheduleRepairList = () => {
  const [repairItems, setRepairItems] = React.useState<ItemData[]>([]);

  React.useEffect(() => {
    setRepairItems(scheduleRepairList);
  }, []);

  const renderData: ListRenderItem<ItemData> = ({item}) => {
    return <ScheduleRepairItem item={item} />;
  };
  return (
    <FlatList
      data={repairItems}
      renderItem={renderData}
      keyExtractor={item => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      // ItemSeparatorComponent={() => <View style={styles.divider} />}
      ListEmptyComponent={() => <Text>No data available</Text>}
    />
  );
};

export default ScheduleRepairList;

const styles = StyleSheet.create({});
