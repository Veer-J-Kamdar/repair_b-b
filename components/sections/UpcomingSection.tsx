import {FlatList, ListRenderItem, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {upcomingSection} from '@/constants/Constant';
import UpcomingRepairCard from '../cards/UpcomingRepairCard';
import CommonText from '../CommonText';
import {Colors} from '@/constants/Colors';

type ItemData = {
  id: number;
  bicycle: string;
  repairType: string;
  date: string;
  image: any;
};

const UpcomingSection = (props: ItemData) => {
  const [upcomingSectionData, setUpcomingSectionData] = React.useState<
    ItemData[]
  >([]);
  React.useEffect(() => {
    setUpcomingSectionData(upcomingSection);
  }, []);
  const renderData: ListRenderItem<ItemData> = ({item}) => {
    return <UpcomingRepairCard item={item} />;
  };

  return (
    <View>
      <FlatList
        data={upcomingSectionData}
        renderItem={renderData}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{width: 10}} />}
        ListEmptyComponent={() => <Text>No data available</Text>}
      />
    </View>
  );
};

export default UpcomingSection;

const styles = StyleSheet.create({});
