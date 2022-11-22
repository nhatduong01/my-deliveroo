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

const RegisterScreen = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 items-center bg-white">
      <Image
        source={require("../assets/register.png")}
        className="w-60 h-40 mt-20"
      />
      <TextInput
        placeholder="Email"
        className="w-3/4 h-12  mt-10 rounded-md border p-3"
      />
      <TextInput
        placeholder="Passsword"
        className="w-3/4 h-12  mt-5 rounded-md border p-3"
      />
      <TextInput
        placeholder="Confirm password"
        className="w-3/4 h-12  mt-5 rounded-md border p-3"
      />
      <TouchableOpacity className="bg-[#00CCBB] w-3/4 h-12 p-3 mt-10 rounded-md">
        <Text className="text-lg font-bold text-white text-center">
          Register
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
