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
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useState } from "react";

const RegisterScreen = ({ navigation }) => {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <SafeAreaView className="flex-1 items-center bg-white">
      <Image
        source={require("../assets/register.png")}
        className="w-60 h-40 mt-20"
      />
      <TextInput
        placeholder="Email"
        className="w-3/4 h-12  mt-10 rounded-md border p-3"
        keyboardType="email-address"
        value={email}
        onChangeText={onChangeEmail}
      />
      <TextInput
        placeholder="Passsword"
        className="w-3/4 h-12  mt-5 rounded-md border p-3"
        secureTextEntry
        value={password}
        onChangeText={onChangePassword}
      />
      <TextInput
        placeholder="Confirm password"
        className="w-3/4 h-12  mt-5 rounded-md border p-3"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setconfirmPassword}
      />
      <Text className="text-red-500 mt-2">{errorMessage}</Text>

      <TouchableOpacity
        className="bg-[#00CCBB] w-3/4 h-12 p-3 mt-10 rounded-md"
        onPress={() => {
          if (password != confirmPassword) {
            setErrorMessage("Confirm Password is not correct");
          } else {
            createUserWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                navigation.navigate("Home");
              })
              .catch((error) => {
                setErrorMessage(error.message);
              });
          }
        }}
      >
        <Text className="text-lg font-bold text-white text-center">
          Register
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
