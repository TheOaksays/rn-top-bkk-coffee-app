import {
  Kanit_400Regular,
  Kanit_700Bold,
  useFonts,
} from "@expo-google-fonts/kanit";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

// ป้องกัน Splash Screen ปิดตัวก่อนฟอนต์โหลดเสร็จ
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Kanit_400Regular,
    Kanit_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack>
      {/* หน้าแรก (Index) ซ่อน Header */}
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />

      {/* หน้า Home */}
      <Stack.Screen
        name="home"
        options={{
          title: "Top Bangkok Coffees",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Kanit_700Bold",
            fontSize: 20,
            color: "white",
          },
          headerStyle: {
            backgroundColor: "#4f1c02",
          },
        }}
      />

      {/* หน้า Detail */}
      <Stack.Screen
        name="detail"
        options={{
          title: "รายละเอียด",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
          },
          headerStyle: {
            backgroundColor: "#4f1c02",
          },
          headerBackButtonDisplayMode: "minimal",
          headerTintColor: "white",
        }}
      />
    </Stack>
  );
}
