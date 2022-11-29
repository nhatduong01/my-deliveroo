import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import globalStyles from "../assets/stylesheets/globalStyles";
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeatureRow from "../components/FeatureRow";
import sanityClient from "../sanity";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";

const HomeScreen = () => {
  const [featuredCategories, setfeaturedCategories] = useState([]);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []); // When the UI is load
  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type=="featured"]
      {
        ...,
        restaurants[]->{
          ...,
          dishes[]->
        }
      }`
      )
      .then((data) => {
        setfeaturedCategories(data);
      });
  }, []); // When the component is load
  return (
    <SafeAreaView className="bg-white pt-4">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2 ">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bond text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bond text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            // onAuthStateChanged(auth, (user) => {
            //   if (user) {
            //     // User is signed in, see docs for a list of available properties
            //     // https://firebase.google.com/docs/reference/js/firebase.User
            //     // signOut(auth)
            //     //   .then(() => {
            //     //     console.log("Sign out successful");
            //     //   })
            //     //   .catch((error) => {
            //     //     // An error happened.
            //     //   });
            //   } else {
            //     navigation.navigate("Login");
            //   }
            // });
            navigation.navigate("Login");
          }}
        >
          <UserIcon size={35} color="#00CCBB" />
        </TouchableOpacity>
      </View>
      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4 ">
        <View className="flex-row space-x-2 bg-gray-200 p-3  flex-1">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          ></TextInput>
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>
      {/* Body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Categories */}
        <Categories />
        {/* Features */}
        {/* Tasty Discounts */}
        {featuredCategories?.map((category) => (
          <FeatureRow
            key={category._id}
            id={category._id}
            title={category.name}
            descriptions={category.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
