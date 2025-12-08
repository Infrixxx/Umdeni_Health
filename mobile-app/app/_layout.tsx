import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { LanguageProvider } from "./context/LanguageContext"; // Import the Provider

export default function Layout() {
  return (
    // Wrap the entire Stack in the LanguageProvider
    <LanguageProvider>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "#F5F7FA" },
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen name="index" /> 
        <Stack.Screen name="role-select" options={{ presentation: 'modal' }} />
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(doctor)" />
        <Stack.Screen name="(patient)" />
        <Stack.Screen name="(family)" />
      </Stack>
    </LanguageProvider>
  );
}
