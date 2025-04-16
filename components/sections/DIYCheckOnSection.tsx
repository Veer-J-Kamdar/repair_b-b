import {FlatList, ListRenderItem, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DIYCheckOn} from '@/constants/Constant';
import DIYCheckOnCard from '../cards/DIYCheckOnCard';

type ItemData = {
  id: number;
  image: any;
};

const DIYCheckOnSection = () => {
  const [recommendData, setRecommendData] = React.useState<ItemData[]>([]);

  React.useEffect(() => {
    setRecommendData(DIYCheckOn);
  }, []);

  const renderData: ListRenderItem<ItemData> = ({item}) => {
    return <DIYCheckOnCard item={item} />;
  };

  return (
    <FlatList
      data={recommendData}
      renderItem={renderData}
      keyExtractor={item => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{width: 12}} />}
      ListEmptyComponent={() => <Text>No data available</Text>}
    />
  );
};

export default DIYCheckOnSection;

const styles = StyleSheet.create({});
