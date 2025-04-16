import {FlatList, ListRenderItem, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {Colors} from '@/constants/Colors';
import {repairMenu} from '@/constants/Constant';
import RepairCard from '../cards/RepairCard';

type ItemData = {
  id: number;
  image: any;
  goto: any;
};

const RepairSection = () => {
  const [repairMenuData, setRepairMenuData] = React.useState<ItemData[]>([]);

  React.useEffect(() => {
    setRepairMenuData(repairMenu);
  }, []);
  
  const renderData: ListRenderItem<ItemData> = ({item}) => {
    return <RepairCard item={item} />;
  };

  return (
    <FlatList
      data={repairMenuData}
      renderItem={renderData}
      keyExtractor={item => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={styles.divider} />}
      ListEmptyComponent={() => <Text>No data available</Text>}
    />
  );
};

export default RepairSection;

const styles = StyleSheet.create({
  divider: {
    borderWidth: 0.5,
    marginVertical: 72,
    borderColor: Colors.light.text,
    opacity: 0.25,
  },
});
