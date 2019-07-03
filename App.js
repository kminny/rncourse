import { Navigation } from "react-native-navigation";

import AuthScreen from "./src/screens/Auth/Auth";
import SharePlace from "./src/screens/SharePlace/SharePlace";
import FindPlace from "./src/screens/FindPlace/FindPlace";

// Register Screens
// Can use anywhere in this Project
Navigation.registerComponent("awesome-place.AuthScreen", () => AuthScreen);
Navigation.registerComponent(
  "awesome-places.SharePlaceScreen",
  () => SharePlace
);
Navigation.registerComponent("awesome-places.FindPlaceScreen", () => FindPlace);

// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "awesome-place.AuthScreen",
    title: "Login"
  }
});
