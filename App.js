import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { useFonts } from "expo-font";
import HomeScreen from "./screens/home.js";

const getFonts = () => {
    const [fontsLoaded] = useFonts({
        "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
        "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
    });
};

const navigator = createStackNavigator(
    {
        Home: HomeScreen,
    },
    {
        initialRouteName: "Home",
        defaultNavigationOptions: {
            title: "App",
            headerShown: false,
        },
    }
);

export default createAppContainer(navigator);
