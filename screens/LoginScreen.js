import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useState } from "react";

const LoginScreen = ({ navigation }) => {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

  return (
    <SafeAreaView className="flex-1 items-center bg-white">
      <Image
        source={require("../assets/deliveroo.png")}
        className="w-20 h-20 mt-20"
      />
      <TextInput
        placeholder="Email"
        className="w-3/4 h-12  mt-10 rounded-md border p-3"
        keyboardType="email-address"
        onChangeText={onChangeEmail}
        value={email}
      />
      <TextInput
        placeholder="Passsword"
        className="w-3/4 h-12  mt-5 rounded-md border p-3"
        secureTextEntry
        onChangeText={onChangePassword}
        value={password}
      />
      <TouchableOpacity
        className="bg-[#00CCBB] w-3/4 h-12 p-3 mt-10 rounded-md"
        onPress={() => {
          console.log(password);
          console.log(email);
        }}
      >
        <Text className="text-lg font-bold text-white text-center">Login</Text>
      </TouchableOpacity>
      <TouchableOpacity className="w-3/4 mt-5">
        <Text className="text-sm antialiased font-medium text-[#00CCBB] text-center">
          Register
        </Text>
      </TouchableOpacity>
      <Image
        source={require("../assets/on_the_way.png")}
        className="scale-[0.4] -mt-14"
      />
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
