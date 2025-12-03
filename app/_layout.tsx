import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";
import { Stack } from "expo-router";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  console.log({ colorScheme });
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }} />
      {/* <Stack.Screen name="(protected)" />
        <Stack.Screen name="(public)" /> */}
      {/* </Stack> */}
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
