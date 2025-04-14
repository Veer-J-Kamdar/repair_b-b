import {FlatList, ListRenderItem, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CommonText from '../CommonText';
import {Colors} from '@/constants/Colors';
import PastRepairCard from '../cards/PastRepairCard';
import {pastSection} from '@/constants/Constant';

type ItemData = {
  id: number;
  bicycle: string;
  repairType: string;
  date: string;
  image: any;
};

const PastSection = () => {
  const [upcomingSectionData, setUpcomingSectionData] = React.useState<
    ItemData[]
  >([]);
  React.useEffect(() => {
    setUpcomingSectionData(pastSection);
  }, []);
  const renderData: ListRenderItem<ItemData> = ({item}) => {
    return <PastRepairCard item={item} />;
  };

  return (
    <View>
      <FlatList
        data={upcomingSectionData}
        renderItem={renderData}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{width: 10}} />}
        ListEmptyComponent={() => <Text>No data available</Text>}
        // contentContainerStyle={{backgroundColor: 'pink'}}
      />
    </View>
  );
};

export default PastSection;

const styles = StyleSheet.create({});
