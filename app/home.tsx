import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '@/components/Header';
import CommonText from '@/components/CommonText';
import {Colors} from '@/constants/Colors';
import RepairSection from '@/components/sections/RepairSection';
import {homeSections} from '@/constants/Constant';

export default function Home() {
  const [homeSectionData, setHomeSectionData] = React.useState<any[]>([]);

  React.useEffect(() => {
    setHomeSectionData(homeSections);
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <ScrollView
        style={{flex: 1, backgroundColor: Colors.light.background}}
        contentContainerStyle={{
          gap: 18,
        }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        nestedScrollEnabled={true}>
        <View style={{backgroundColor: 'white'}}>
          <View
            style={{
              paddingHorizontal: 81,
              paddingVertical: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <CommonText
              text="What do you want to do today?"
              variant="headlineLarge"
              textStyle={styles.repairMenuTitle}
            />
          </View>
          <RepairSection />
        </View>
        <View style={{gap: 16}}>
          {homeSectionData.map(item => (
            <View key={item.id} style={{gap: 12, marginHorizontal: 24}}>
              <CommonText
                text={item.title}
                variant="titleLarge"
                textStyle={{
                  fontFamily: 'Bold',
                  color: Colors.light.accent,
                }}
              />
              {item.section}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  repairMenuTitle: {
    fontFamily: 'Bold',
    textAlign: 'center',
    color: Colors.light.accent,
  },
});
