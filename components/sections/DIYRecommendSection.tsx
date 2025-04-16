import {FlatList, ListRenderItem, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DIYRecommend} from '@/constants/Constant';
import DIYRecommendCard from '../cards/DIYRecommendCard';

type ItemData = {
  id: number;
  title: string;
  desp: string;
  image: any;
};

const DIYRecommendSection = () => {
  const [recommendData, setRecommendData] = React.useState<ItemData[]>([]);

  React.useEffect(() => {
    setRecommendData(DIYRecommend);
  }, []);

  const renderData: ListRenderItem<ItemData> = ({item}) => {
    return <DIYRecommendCard item={item} />;
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

export default DIYRecommendSection;

const styles = StyleSheet.create({});
