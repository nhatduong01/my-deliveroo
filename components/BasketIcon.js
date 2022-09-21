import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import { useNavigation } from "@react-navigation/native";
import Currency from "react-currency-formatter";

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  // redux is magic !!!!
  const navigation = useNavigation();
  if (items.length === 0) return null;
  return (
    <View className="absolute bottom-10 z-50 w-full">
      <TouchableOpacity
        className="bg-[#00CCBB] mx-5 p-4 rounded-lg flex-row items-center space-x-1"
        onPress={() => navigation.navigate("basket")}
      >
        <Text className="text-lg font-extrabold text-white bg-[#01A296] py-1 px-2">
          {items.length}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
          <Currency quantity={basketTotal} currency="USD" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
