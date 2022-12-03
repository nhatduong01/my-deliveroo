import "react-native-gesture-handler";
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
import PreparingOrderScreen from "./screens/PreparingOrderScreen";
import Delivery from "./screens/Delivery";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import PaymentScreen from "./screens/PaymentScreen";
import { StripeProvider } from "@stripe/stripe-react-native";
import { STRIPE_PUBLIC_KEY } from "@env";

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StripeProvider publishableKey={STRIPE_PUBLIC_KEY}>
        <Provider store={store}>
          <TailwindProvider>
            <stack.Navigator>
              <stack.Screen name="Home" component={HomeScreen} />
              <stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                  presentation: "fullScreenModal",
                  headerShown: false,
                }}
              />
              <stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{
                  presentation: "fullScreenModal",
                  headerShown: false,
                }}
              />
              <stack.Screen name="Restaurant" component={RestaurantScreen} />
              <stack.Screen
                name="basket"
                component={BasketScreen}
                options={{ presentation: "modal", headerShown: false }}
              />
              <stack.Screen
                name="PreparingOrder"
                component={PreparingOrderScreen}
                options={{
                  presentation: "fullScreenModal",
                  headerShown: false,
                }}
              />
              <stack.Screen
                name="Delivery"
                component={Delivery}
                options={{
                  presentation: "fullScreenModal",
                  headerShown: false,
                }}
              />
              <stack.Screen
                name="Payment"
                component={PaymentScreen}
                options={{
                  presentation: "fullScreenModal",
                  headerShown: false,
                }}
              />
            </stack.Navigator>
          </TailwindProvider>
        </Provider>
      </StripeProvider>
    </NavigationContainer>
  );
}
