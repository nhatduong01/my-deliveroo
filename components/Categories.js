import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import Sanityclient from "../sanity";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    Sanityclient.fetch(
      `*[_type == "category"]{
      name,
      image,
      _id
    }`
    ).then((data) => {
      setCategories(data);
    });
  }, []);
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {/* Category card */}
      {categories?.map((category) => (
        <CategoryCard
          key={category._id}
          imgUrl={category.image}
          title={category.name}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
