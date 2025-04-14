import {FlatList, ListRenderItem, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Drawer} from 'react-native-paper';
import DrawerItemCard from '../cards/DrawerItemCard';

type ItemData = {
  id: number;
  item: string;
  goto: () => void;
  drawerData: any;
};

type Props = {
  drawerData: any;
};

const CommonDrawer = (props: Props) => {
  const [drawerData, setDrawerData] = React.useState<ItemData[]>([]);

  React.useEffect(() => {
    setDrawerData(props.drawerData);
  }, []);
  const renderData: ListRenderItem<ItemData> = ({item}) => {
    return <DrawerItemCard item={item} />;
  };

  return (
    <Drawer.Section>
      <FlatList
        data={props.drawerData}
        renderItem={renderData}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        // ItemSeparatorComponent={() => <View style={{width: 10}} />}
        ListEmptyComponent={() => <Text>No data available</Text>}
      />
    </Drawer.Section>
  );
};

export default CommonDrawer;

const styles = StyleSheet.create({});
