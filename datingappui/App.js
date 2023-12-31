import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from '../datingappui/src/navigation/Navigator';
import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_600SemiBold,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";
import { AppLoading } from "expo";

const App = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_600SemiBold,
    // Montserrat_800ExtraBold
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};
export default App;
