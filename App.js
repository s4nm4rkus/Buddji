import { useFonts } from "expo-font";
import AppNavigator from "./navigation/AppNavigator";

const App = () => {
  const [loaded] = useFonts({
    MBold: require("./assets/fonts/Montserrat-Bold.ttf"),
    MBlack: require("./assets/fonts/Montserrat-Black.ttf"),
    MSemiBold: require("./assets/fonts/Montserrat-SemiBold.ttf"),
    MExtraBold: require("./assets/fonts/Montserrat-ExtraBold.ttf"),
    MMedium: require("./assets/fonts/Montserrat-Medium.ttf"),
    MRegular: require("./assets/fonts/Montserrat-Regular.ttf"),
    MLight: require("./assets/fonts/Montserrat-Light.ttf"),
    MExtraLight: require("./assets/fonts/Montserrat-ExtraLight.ttf"),
    InBlack: require("./assets/fonts/Inter_Black.ttf"),
    InBold: require("./assets/fonts/Inter_Bold.ttf"),
    InSemiBold: require("./assets/fonts/Inter_SemiBold.ttf"),
    InMedium: require("./assets/fonts/Inter_Medium.ttf"),
    InRegular: require("./assets/fonts/Inter_Regular.ttf"),
    InExtraBold: require("./assets/fonts/Inter_ExtraBold.ttf"),
    InThin: require("./assets/fonts/Inter_Thin.ttf"),
    InLight: require("./assets/fonts/Inter_Light.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return <AppNavigator />;
};

export default App;
