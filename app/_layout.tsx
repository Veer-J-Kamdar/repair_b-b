import {Colors} from '@/constants/Colors';
import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native';
import {useFonts} from 'expo-font';
import {Stack} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {StatusBar} from 'expo-status-bar';
import {useEffect} from 'react';
import {useColorScheme} from 'react-native';
import 'react-native-reanimated';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Regular: require('../assets/fonts/Comfortaa-Regular.ttf'),
    Light: require('../assets/fonts/Comfortaa-Light.ttf'),
    Bold: require('../assets/fonts/Comfortaa-Bold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const lightTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      ...Colors.light,
    },
  };
  const darkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      ...Colors.dark,
    },
  };
  return (
    <>
      <StatusBar style="auto" />
      <ThemeProvider value={colorScheme === 'dark' ? darkTheme : lightTheme}>
        <Stack screenOptions={{headerShown: false}} initialRouteName="home">
          <Stack.Screen name="home" />
          <Stack.Screen name="(auth)" />
        </Stack>
      </ThemeProvider>
    </>
  );
}
