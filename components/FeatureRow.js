import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeatureRow = ({ title, descriptions, featuredCategory, id }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bond text-lg ">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{descriptions}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* RestaurantCard */}
        <RestaurantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="Hokkaido Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main street"
          short_description="This is short description"
          dishes={[]}
          long={20}
          lat={15}
        />
        <RestaurantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="Hokkaido Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main street"
          short_description="This is short description"
          dishes={[]}
          long={20}
          lat={15}
        />
        <RestaurantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="Hokkaido Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main street"
          short_description="This is short description"
          dishes={[]}
          long={20}
          lat={15}
        />
      </ScrollView>
    </View>
  );
};

export default FeatureRow;
