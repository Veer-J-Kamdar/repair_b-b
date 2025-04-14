import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Drawer} from 'expo-router/drawer';
import React from 'react';
import DrawerSection from '@/components/sections/DrawerSection';
import {appMenu} from '@/constants/Constant';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Drawer
        screenOptions={{headerShown: false}}
        drawerContent={() => <DrawerSection drawerData={appMenu} />}
      />
    </GestureHandlerRootView>
  );
}
