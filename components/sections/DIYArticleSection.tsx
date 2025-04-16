import {FlatList, ListRenderItem, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DIYArticleCard from '../cards/DIYArticleCard';
import {DIYArticle} from '@/constants/Constant';

type ItemData = {
  id: number;
  title: string;
};

const DIYArticleSection = () => {
  const [articleData, setArticleData] = React.useState<ItemData[]>([]);

  React.useEffect(() => {
    setArticleData(DIYArticle);
  }, []);

  const renderData: ListRenderItem<ItemData> = ({item}) => {
    return <DIYArticleCard item={item} />;
  };

  return (
    <FlatList
      data={articleData}
      renderItem={renderData}
      keyExtractor={item => item.id.toString()}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{width: 12}} />}
      ListEmptyComponent={() => <Text>No data available</Text>}
    />
  );
};

export default DIYArticleSection;

const styles = StyleSheet.create({});
