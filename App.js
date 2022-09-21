import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import { Provider } from "react-redux";
import { store } from "./store";
import BasketScreen from "./screens/BasketScreen";

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <stack.Navigator>
            <stack.Screen name="Home" component={HomeScreen} />
            <stack.Screen name="Restaurant" component={RestaurantScreen} />
            <stack.Screen
              name="basket"
              component={BasketScreen}
              options={{ presentation: "modal", headerShown: false }}
            />
          </stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}
